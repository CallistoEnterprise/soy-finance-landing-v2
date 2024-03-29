import {useEffect, useMemo, useState} from "react";
import {IIFE} from "../../../shared/utils/iife";
import farmsToFetch from "../constants/farms/farmsInCLO";
import {Contract, FixedNumber, FunctionFragment, JsonRpcProvider} from "ethers";
import {ERC_20_INTERFACE, LOCAL_FARM_INTERFACE, MASTER_CHEF_INTERFACE} from "../../../shared/config/interfaces";
import {fetchFarmsPrices} from "../utils";
import {useErc20Fragment, useLocalFarmFragment, useMasterChefFragment} from "../../../shared/config/fragments";
import {gql, request} from "graphql-request";
import {FarmConfig, PoolData} from "../types";
import {getUnixTime, startOfMinute, subDays, subWeeks} from "date-fns";
import {multiQuery} from "./fetcher-home";
import {ChainId} from "../constants/networks/chainId";
import {MULTICALL_ABI} from "../../../shared/abis";


export type SerializedBigNumber = string

export interface Farm extends FarmConfig {
  tokenAmountMc: FixedNumber
  quoteTokenAmountMc: FixedNumber
  tokenAmountTotal: FixedNumber
  quoteTokenAmountTotal: FixedNumber
  lpTotalInQuoteToken: FixedNumber
  lpTotalSupply: FixedNumber
  tokenPriceVsQuote: FixedNumber
  liquidity: FixedNumber
  poolWeight?: SerializedBigNumber
  realmulti?: any
  lpRewardsApr: number,
  apr: FixedNumber,
  userData?: {
    allowance: string
    tokenBalance: string
    stakedBalance: string
    earnings: string
  }
}


function compareApr(a: Farm, b: Farm) {
  if(!a.apr && !b.apr) {
    return 0;
  }

  if(!a.apr) {
    return 1;
  }

  if(!b.apr) {
    return -1;
  }


  const farmA_APR = a.apr.toUnsafeFloat() + a.lpRewardsApr;
  const farmB_APR = b.apr.toUnsafeFloat() + b.lpRewardsApr;

  if (farmA_APR < farmB_APR) {
    return 1;
  }
  if (farmA_APR > farmB_APR) {
    return -1;
  }
  return 0;
}

function compareMultiplier(a: Farm, b: Farm) {
  if (a.multiplier < b.multiplier) {
    return 1;
  }
  if (a.multiplier > b.multiplier) {
    return -1;
  }
  return 0;
}

function compareLiquidity(a: Farm, b: Farm) {
  if (a.liquidity.toUnsafeFloat() < b.liquidity.toUnsafeFloat()) {
    return 1;
  }
  if (a.liquidity.toUnsafeFloat() > b.liquidity.toUnsafeFloat()) {
    return -1;
  }

  return 0;
}

export const getDeltaTimestamps = (): [number, number, number, number] => {
  const utcCurrentTime = getUnixTime(new Date()) * 1000
  const t24h = getUnixTime(startOfMinute(subDays(utcCurrentTime, 1)))
  const t48h = getUnixTime(startOfMinute(subDays(utcCurrentTime, 2)))
  const t7d = getUnixTime(startOfMinute(subWeeks(utcCurrentTime, 1)))
  const t14d = getUnixTime(startOfMinute(subWeeks(utcCurrentTime, 2)))
  return [t24h, t48h, t7d, t14d]
}

interface TopPoolsResponse {
  pairDayDatas: {
    id: string
  }[]
}

const infoClient = 'https://03.callisto.network/subgraphs/name/soyswap';

// These tokens are either incorrectly priced or have some other issues that spoil the query data
// None of them present any interest as they have almost 0 daily trade volume
export const TOKEN_BLACKLIST = [
  '0xffbce94c24a6c67daf7315948eb8b9fa48c5cdee',
  '0xcc78d0a86b0c0a3b32debd773ec815130f9527cf',
]

const fetchTopPools = async (timestamp24hAgo: number): Promise<string[]> => {
  try {
    const query = gql`
      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {
        pairDayDatas(
          first: 30
          where: { dailyTxns_gt: 1, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: $timestamp24hAgo }
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `
    const data = await request<TopPoolsResponse>(infoClient, query, {blacklist: TOKEN_BLACKLIST, timestamp24hAgo})
    // pairDayDatas id has compound id "0xPOOLADDRESS-NUMBERS", extracting pool address with .split('-')
    return data.pairDayDatas.map((p) => p.id.split('-')[0])
  } catch (error) {
    console.error('Failed to fetch top pools', error)
    return []
  }
}

const useTopPoolAddresses = (): string[] => {
  const [topPoolAddresses, setTopPoolAddresses] = useState([])
  const [timestamp24hAgo] = getDeltaTimestamps()

  useEffect(() => {
    const fetch = async () => {
      const addresses = await fetchTopPools(timestamp24hAgo)
      setTopPoolAddresses(addresses)
    }
    if (topPoolAddresses.length === 0) {
      fetch()
    }
  }, [topPoolAddresses, timestamp24hAgo])

  return topPoolAddresses
}

/**
 * Data for displaying pool tables (on multiple pages, used throughout the site)
 * Note: Don't try to refactor it to use variables, server throws error if blocks passed as undefined variable
 * only works if its hard-coded into query string
 */
const POOL_AT_BLOCK = (block: number | null, pools: string[]) => {
  const blockString = block ? `block: {number: ${block}}` : ``
  const addressesString = `["${pools.join('","')}"]`
  return `pairs(
    where: { id_in: ${addressesString} }
    ${blockString}
    orderBy: trackedReserveCLO
    orderDirection: desc
  ) {
    id
    reserve0
    reserve1
    reserveUSD
    volumeUSD
    token0Price
    token1Price
    token0 {
      id
      symbol
      name
    }
    token1 {
      id
      symbol
      name
    }
  }`
}

interface PoolFields {
  id: string
  reserve0: string
  reserve1: string
  reserveUSD: string
  volumeUSD: string
  token0Price: string
  token1Price: string
  token0: {
    id: string
    symbol: string
    name: string
  }
  token1: {
    id: string
    symbol: string
    name: string
  }
}

interface FormattedPoolFields
  extends Omit<PoolFields, 'volumeUSD' | 'reserveUSD' | 'reserve0' | 'reserve1' | 'token0Price' | 'token1Price'> {
  volumeUSD: number
  reserveUSD: number
  reserve0: number
  reserve1: number
  token0Price: number
  token1Price: number
}

interface PoolsQueryResponse {
  now: PoolFields[]
  oneDayAgo: PoolFields[]
  twoDaysAgo: PoolFields[]
  oneWeekAgo: PoolFields[]
  twoWeeksAgo: PoolFields[]
}

const fetchPoolData = async (
  block24h: number,
  block48h: number,
  block7d: number,
  block14d: number,
  poolAddresses: string[],
) => {
  try {
    const query = gql`
      query pools {
        now: ${POOL_AT_BLOCK(null, poolAddresses)}
        oneDayAgo: ${POOL_AT_BLOCK(block24h, poolAddresses)}
        twoDaysAgo: ${POOL_AT_BLOCK(block48h, poolAddresses)}
        oneWeekAgo: ${POOL_AT_BLOCK(block7d, poolAddresses)}
        twoWeeksAgo: ${POOL_AT_BLOCK(block14d, poolAddresses)}
      }
    `
    const data = await request<PoolsQueryResponse>(infoClient, query)
    return {data, error: false}
  } catch (error) {
    console.error('Failed to fetch pool data', error)
    return {error: true}
  }
}

// Transforms pools into "0xADDRESS: { ...PoolFields }" format and cast strings to numbers
const parsePoolData = (pairs?: PoolFields[]) => {
  if (!pairs) {
    return {}
  }
  return pairs.reduce((accum: { [address: string]: FormattedPoolFields }, poolData) => {
    const {volumeUSD, reserveUSD, reserve0, reserve1, token0Price, token1Price} = poolData
    accum[poolData.id] = {
      ...poolData,
      volumeUSD: parseFloat(volumeUSD),
      reserveUSD: parseFloat(reserveUSD),
      reserve0: parseFloat(reserve0),
      reserve1: parseFloat(reserve1),
      token0Price: parseFloat(token0Price),
      token1Price: parseFloat(token1Price),
    }
    return accum
  }, {})
}

interface PoolDatas {
  error: boolean
  data?: {
    [address: string]: PoolData
  }
}

/**
 * Get increase/decrease of value compared to the previous value (e.g. 24h volume compared to 24h volume the day before )
 * @param valueNow - more recent value
 * @param valueBefore - value to compare with
 */
export const getAmountChange = (valueNow?: number, valueBefore?: number) => {
  if (valueNow && valueBefore) {
    return valueNow - valueBefore
  }
  if (valueNow) {
    return valueNow
  }
  return 0
}

/**
 * Get increase/decrease of value compared to the previous value as a percentage
 * @param valueNow - more recent value
 * @param valueBefore - value to compare with
 */
export const getPercentChange = (valueNow?: number, valueBefore?: number): number => {
  if (valueNow && valueBefore) {
    return ((valueNow - valueBefore) / valueBefore) * 100
  }
  return 0
}

/**
 * Given current value and value 1 and 2 periods (e.g. 1day + 2days, 1week - 2weeks) returns the amount change for latest period
 * and percentage change compared to the previous period.
 * @param valueNow - current value
 * @param valueOnePeriodAgo - value 1 period ago (e.g. 1 day or 1 week ago), period unit must be same as valueTwoPeriodsAgo
 * @param valueTwoPeriodsAgo - value 2 periods ago (e.g. 2 days or 2 weeks ago), period unit must be same as valueOnePeriodAgo
 * @returns amount change for the latest period and percentage change compared to previous period
 */
export const getChangeForPeriod = (
  valueNow?: number,
  valueOnePeriodAgo?: number,
  valueTwoPeriodsAgo?: number,
): [number, number] => {
  const currentPeriodAmount = getAmountChange(valueNow, valueOnePeriodAgo)
  const previousPeriodAmount = getAmountChange(valueOnePeriodAgo, valueTwoPeriodsAgo)
  const percentageChange = getPercentChange(currentPeriodAmount, previousPeriodAmount)
  return [currentPeriodAmount, percentageChange]
}

const getBlockSubqueries = (timestamps: number[]) =>
  timestamps.map((timestamp) => {
    return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${timestamp}, timestamp_lt: ${
      timestamp + 600
    } }) {
      number
    }`
  })

const blocksQueryConstructor = (subqueries: string[]) => {
  return gql`query blocks {
    ${subqueries}
  }`
}

/**
 * @notice Fetches block objects for an array of timestamps.
 * @param {Array} timestamps
 */
const blocksClient = 'https://03.callisto.network/subgraphs/name/blocks';

export const getBlocksFromTimestamps = async (
  timestamps: number[],
  sortDirection: 'asc' | 'desc' = 'desc',
  skipCount = 500,
): Promise<Block[]> => {
  if (timestamps?.length === 0) {
    return []
  }

  const fetchedData: any = await multiQuery(
    blocksQueryConstructor,
    getBlockSubqueries(timestamps),
    blocksClient,
    skipCount,
  )

  const sortingFunction =
    sortDirection === 'desc' ? (a: Block, b: Block) => b.number - a.number : (a: Block, b: Block) => a.number - b.number

  const blocks: Block[] = []
  if (fetchedData) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(fetchedData)) {
      if (fetchedData[key].length > 0) {
        blocks.push({
          timestamp: key.split('t')[1],
          number: parseInt(fetchedData[key][0].number, 10),
        })
      }
    }
    // graphql-request does not guarantee same ordering of batched requests subqueries, hence manual sorting
    blocks.sort(sortingFunction)
  }
  return blocks
}

export interface Block {
  number: number
  timestamp: string
}

/**
 * for a given array of timestamps, returns block entities
 * @param timestamps
 * @param sortDirection
 * @param skipCount
 */
export const useBlocksFromTimestamps = (
  timestamps: number[],
  sortDirection: 'asc' | 'desc' = 'desc',
  skipCount = 1000,
): {
  blocks?: Block[]
  error: boolean
} => {
  const [blocks, setBlocks] = useState<Block[]>()
  const [error, setError] = useState(false)

  const timestampsString = JSON.stringify(timestamps)
  const blocksString = blocks ? JSON.stringify(blocks) : undefined

  useEffect(() => {
    const fetchData = async () => {
      const timestampsArray = JSON.parse(timestampsString)
      const result = await getBlocksFromTimestamps(timestampsArray, sortDirection, skipCount)
      if (result.length === 0) {
        setError(true)
      } else {
        setBlocks(result)
      }
    }
    const blocksArray = blocksString ? JSON.parse(blocksString) : undefined
    if (!blocksArray && !error) {
      fetchData()
    }
  }, [blocksString, error, skipCount, sortDirection, timestampsString])

  return {
    blocks,
    error,
  }
}

export const WEEKS_IN_YEAR = 52.1429;

export const TOTAL_FEE = 0.002;
export const LP_HOLDERS_FEE = 0.002;

export const getLpFeesAndApr = (volumeUSD: number, volumeUSDWeek: number, liquidityUSD: number) => {
  const totalFees24h = volumeUSD * TOTAL_FEE
  const totalFees7d = volumeUSDWeek * TOTAL_FEE
  const lpFees24h = volumeUSD * LP_HOLDERS_FEE
  const lpFees7d = volumeUSDWeek * LP_HOLDERS_FEE

  const lpApr7d = liquidityUSD > 0 ? (volumeUSDWeek * LP_HOLDERS_FEE * WEEKS_IN_YEAR * 100) / liquidityUSD : 0
  return {
    totalFees24h,
    totalFees7d,
    lpFees24h,
    lpFees7d,
    lpApr7d: lpApr7d !== Infinity ? lpApr7d : 0,
  }
}

const usePoolDatas = (poolAddresses: string[]): PoolDatas => {
  const [fetchState, setFetchState] = useState<PoolDatas>({error: false})
  const [t24h, t48h, t7d, t14d] = getDeltaTimestamps()
  const {blocks, error: blockError} = useBlocksFromTimestamps([t24h, t48h, t7d, t14d])
  const [block24h, block48h, block7d, block14d] = blocks ?? []

  useEffect(() => {
    const fetch = async () => {
      const {error, data} = await fetchPoolData(
        block24h.number,
        block48h.number,
        block7d.number,
        block14d.number,
        poolAddresses,
      )
      if (error) {
        setFetchState({error: true})
      } else {
        const formattedPoolData = parsePoolData(data?.now)
        const formattedPoolData24h = parsePoolData(data?.oneDayAgo)
        const formattedPoolData48h = parsePoolData(data?.twoDaysAgo)
        const formattedPoolData7d = parsePoolData(data?.oneWeekAgo)
        const formattedPoolData14d = parsePoolData(data?.twoWeeksAgo)

        // Calculate data and format
        const formatted = poolAddresses.reduce((accum: { [address: string]: PoolData }, address) => {
          // Undefined data is possible if pool is brand new and didn't exist one day ago or week ago.
          const current: FormattedPoolFields | undefined = formattedPoolData[address]
          const oneDay: FormattedPoolFields | undefined = formattedPoolData24h[address]
          const twoDays: FormattedPoolFields | undefined = formattedPoolData48h[address]
          const week: FormattedPoolFields | undefined = formattedPoolData7d[address]
          const twoWeeks: FormattedPoolFields | undefined = formattedPoolData14d[address]

          const [volumeUSD, volumeUSDChange] = getChangeForPeriod(
            current?.volumeUSD,
            oneDay?.volumeUSD,
            twoDays?.volumeUSD,
          )
          const [volumeUSDWeek, volumeUSDChangeWeek] = getChangeForPeriod(
            current?.volumeUSD,
            week?.volumeUSD,
            twoWeeks?.volumeUSD,
          )

          const liquidityUSD = current ? current.reserveUSD : 0

          const liquidityUSDChange = getPercentChange(current?.reserveUSD, oneDay?.reserveUSD)

          const liquidityToken0 = current ? current.reserve0 : 0
          const liquidityToken1 = current ? current.reserve1 : 0

          const {totalFees24h, totalFees7d, lpFees24h, lpFees7d, lpApr7d} = getLpFeesAndApr(
            volumeUSD,
            volumeUSDWeek,
            liquidityUSD,
          )

          if (current) {
            accum[address] = {
              address,
              token0: {
                address: current.token0.id,
                name: current.token0.name,
                symbol: current.token0.symbol,
              },
              token1: {
                address: current.token1.id,
                name: current.token1.name,
                symbol: current.token1.symbol,
              },
              token0Price: current.token0Price,
              token1Price: current.token1Price,
              volumeUSD,
              volumeUSDChange,
              volumeUSDWeek,
              volumeUSDChangeWeek,
              totalFees24h,
              totalFees7d,
              lpFees24h,
              lpFees7d,
              lpApr7d,
              liquidityUSD,
              liquidityUSDChange,
              liquidityToken0,
              liquidityToken1,
            }
          }

          return accum
        }, {})
        setFetchState({data: formatted, error: false})
      }
    }

    const allBlocksAvailable = block24h?.number && block48h?.number && block7d?.number && block14d?.number
    if (poolAddresses.length > 0 && allBlocksAvailable && !blockError) {
      fetch()
    }
  }, [poolAddresses, block24h, block48h, block7d, block14d, blockError])

  return fetchState
}

const getFarmApr = (
  poolWeight: FixedNumber,
  soyPriceUsd: FixedNumber | undefined,
  poolLiquidityUsd: FixedNumber,
  farmAddress: string | undefined,
  chainId = 820,
  swapApr = 0,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  const yearlySoyRewardAllocation = FixedNumber.fromValue(50000000 * 0.8).mul(poolWeight);
  const p = soyPriceUsd || FixedNumber.fromValue(0);

  const soyRewardsApr = yearlySoyRewardAllocation.mul(p).div(poolLiquidityUsd).mul(FixedNumber.fromValue(100));
  let soyRewardsAprAsNumber = null

  if (!soyRewardsApr.isZero() /* && soyRewardsApr.isFinite() */) {
    soyRewardsAprAsNumber = soyRewardsApr
  }
  const lpRewardsApr = swapApr //lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return {cakeRewardsApr: soyRewardsAprAsNumber, lpRewardsApr}
}

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x8bA3D23241c7044bE703afAF2A728FdBc16f5F6f",
  [ChainId.CLOTESTNET]: "0xDd2742Ba146A57F1F6e8F47235024ba1bd0cf568",
  [ChainId.ETHEREUM]: "",
  [ChainId.RINKEBY]: "",
  [ChainId.KOVAN]: "",
  [ChainId.BSC]: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
  [ChainId.BSCTESTNET]: "",
  [ChainId.ETCCLASSICMAINNET]: "0x98194aaA67638498547Df929DF4926C7D0DCD135",
  [ChainId.BTTMAINNET]: "0x8dFbdEEeF41eefd92A663a34331db867CA6581AE"
};

export function useMultiCallJSONRpcContract() {
  const provider = new JsonRpcProvider("https://rpc.callisto.network/")

  return useMemo(() => {
    return new Contract(
      MULTICALL_NETWORKS["820"],
      MULTICALL_ABI,
      provider
    );
  }, []);
}

export function useFarms() {
  const multiCallContract = useMultiCallJSONRpcContract();

  const totalSupplyFragment = useErc20Fragment("totalSupply");
  const balanceOfFragment = useErc20Fragment("balanceOf");
  const decimalsFragment = useErc20Fragment("decimals");

  const localFarmsFragment = useMasterChefFragment("localFarms");

  const getAllocFragment = useLocalFarmFragment("getAllocationX1000");

  const [data, setData] = useState<Farm[] | null[]>([null, null, null]);

  const addresses = useTopPoolAddresses();

  const poolsDatas = usePoolDatas(addresses);

  useEffect(() => {
    if (!multiCallContract
      || !totalSupplyFragment
      || !balanceOfFragment
      || !decimalsFragment
      || !localFarmsFragment
      || !getAllocFragment
    ) {
      return;
    }

    const resultsCalls = [];
    const multiplierResultsCalls = [];
    const allocResultsCalls = [];

    IIFE(async () => {

      for (let i = 0; i < farmsToFetch.length; i++) {
        const {lpAddresses, token, quoteToken, localFarmAddresses, pid} = farmsToFetch[i];
        const lpAddress = lpAddresses["820"];

        const calls: Array<{ address: string | undefined, fragment: FunctionFragment, params?: any }> = [
          // Balance of token in the LP contract
          {
            address: token.address?.["820"],
            fragment: balanceOfFragment,
            params: [lpAddress],
          },
          // Balance of quote token on LP contract
          {
            address: quoteToken.address?.["820"],
            fragment: balanceOfFragment,
            params: [lpAddress],
          },
          // Balance of LP tokens in the master chef contract
          {
            address: lpAddress,
            fragment: balanceOfFragment,
            params: [localFarmAddresses?.["820"]],
          },
          // Total supply of LP tokens
          {
            address: lpAddress,
            fragment: totalSupplyFragment
          },
          // Token decimals
          {
            address: token.address?.["820"],
            fragment: decimalsFragment
          },
          // Quote token decimals
          {
            address: token.address?.["820"],
            fragment: decimalsFragment
          },
        ];

        const multiplierCall = {
          address: '0x64Fa36ACD0d13472FD786B03afC9C52aD5FCf023',
          fragment: localFarmsFragment,
          params: [pid],
        };

        const allocPointCall = {
          address: localFarmAddresses?.["820"],
          fragment: getAllocFragment,
          params: [],
        }

        multiplierResultsCalls.push([multiplierCall.address, MASTER_CHEF_INTERFACE.encodeFunctionData(multiplierCall.fragment, multiplierCall.params)]);

        allocResultsCalls.push([allocPointCall.address, LOCAL_FARM_INTERFACE.encodeFunctionData(allocPointCall.fragment)]);

        resultsCalls.push(...calls.map((call) => [
          call.address?.toLowerCase(),
          ERC_20_INTERFACE.encodeFunctionData(call.fragment, call.params ? call.params : undefined)
        ]));
      }

      const {returnData: allReturnData} = await multiCallContract["aggregate"](resultsCalls);

      const {returnData: multiplierReturnData} = await multiCallContract["aggregate"](multiplierResultsCalls);

      const {returnData: allocReturnData} = await multiCallContract["aggregate"](allocResultsCalls);

      const multiplierResult = multiplierReturnData.map(call => MASTER_CHEF_INTERFACE.decodeFunctionResult(localFarmsFragment, call));
      const allocResult = allocReturnData.map(call => MASTER_CHEF_INTERFACE.decodeFunctionResult(getAllocFragment, call));

      const split = [];

      for (let i = 0; i < allReturnData.length; i += 6) {
        const subarray = allReturnData.slice(i, i + 6);
        split.push(subarray);
      }

      const decodedArray = split.map((callArray) => {
        return callArray.map((call, i) => {
          if (i === 4 || i === 5) {
            return ERC_20_INTERFACE.decodeFunctionResult(decimalsFragment, call);
          }

          if (i === 3) {
            return ERC_20_INTERFACE.decodeFunctionResult(totalSupplyFragment, call);
          }

          return ERC_20_INTERFACE.decodeFunctionResult(balanceOfFragment, call);
        });
      });

      //
      // console.log(results);
      // console.log(multiplierResults);
      // console.log(allocResults);

      const serializedResults = decodedArray.map((result, i) => {
        const [
          {0: tokenBalanceLP},
          {0: quoteTokenBalanceLP},
          {0: lpTokenBalanceMC},
          {0: lpTotalSupply},
          {0: tokenDecimals},
          {0: quoteTokenDecimals}
        ] = result;

        const multiplierData = multiplierResult[i];
        const allocData = allocResult[i];

        const tokenBalanceLPFixed = FixedNumber.fromValue(tokenBalanceLP, 18);
        const quoteTokenBalanceLPFixed = FixedNumber.fromValue(quoteTokenBalanceLP, 18);
        const lpTokenBalanceMCFixed = FixedNumber.fromValue(lpTokenBalanceMC, 18);
        const lpTotalSupplyFixed = FixedNumber.fromValue(lpTotalSupply, 18);

        const lpTokenRatio = lpTokenBalanceMCFixed.div(lpTotalSupplyFixed);

        const tokenDecimalsMultiplier = FixedNumber.fromValue(10n ** tokenDecimals, 18);
        const quoteTokenDecimalsMultiplier = FixedNumber.fromValue(10n ** quoteTokenDecimals, 18);

        // Raw amount of token in the LP, including those not staked
        const tokenAmountTotal = tokenBalanceLPFixed.div(tokenDecimalsMultiplier);
        const quoteTokenAmountTotal = quoteTokenBalanceLPFixed.div(quoteTokenDecimalsMultiplier);

        // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
        const tokenAmountMc = tokenAmountTotal.mul(lpTokenRatio);
        const quoteTokenAmountMc = quoteTokenAmountTotal.mul(lpTokenRatio);

        // Total staked in LP, in quote token value
        const lpTotalInQuoteToken = quoteTokenAmountMc.mul(FixedNumber.fromValue(2n)); //wrong
        const tokenPriceVsQuote = quoteTokenAmountTotal.div(tokenAmountTotal);

        const poolWeight = allocData[0] ? FixedNumber.fromValue(allocData[0]).div(FixedNumber.fromValue(1000n)) : FixedNumber.fromValue(0);

        return {
          ...farmsToFetch[i],
          tokenAmountMc, // correct
          quoteTokenAmountMc, // wrong
          tokenAmountTotal, // correct
          quoteTokenAmountTotal, // wrong
          lpTotalSupply, // correct
          lpTotalInQuoteToken, // wrong
          multiplier: multiplierData[1],
          poolWeight,
          tokenPriceVsQuote
        }
      });

      const farmsWithPrices = fetchFarmsPrices(serializedResults);

      const farmsWithAPR = farmsWithPrices.map((farm) => {
        const poolKey = farm.lpAddresses["820"]?.toLowerCase();
        const farmSwapAPR = poolsDatas.data && poolsDatas.data[poolKey] && poolsDatas.data[poolKey] ? poolsDatas.data[poolKey].lpApr7d : 0

        const mainFarmPrice = farmsWithPrices.find((farm) => farm.pid === 2)?.token.usdcPrice;

        const {cakeRewardsApr, lpRewardsApr} = getFarmApr(
          farm.poolWeight,
          mainFarmPrice,
          farm.liquidity,
          farm.lpAddresses["820"],
          820,
          farmSwapAPR,
        );

        return {...farm, apr: cakeRewardsApr, lpRewardsApr}
      });

      setData(farmsWithAPR.sort(compareApr));
    });
  }, [balanceOfFragment, decimalsFragment, getAllocFragment, localFarmsFragment, multiCallContract, poolsDatas.data, totalSupplyFragment]);

  return data;
}
