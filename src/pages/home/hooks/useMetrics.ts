import axios from 'axios'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import { request, gql } from 'graphql-request'
import Farmlist from '../constants/farmlist.json'

/* eslint no-await-in-loop: 0 */



export const useGetBurnedSoy = () => {
  const [burnedSoy, setBurnedSoy] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-supply-api.netlify.app/.netlify/functions/server/burned')
        .then((response) => {
          if (response.data) {
            setBurnedSoy(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return burnedSoy
}

export const useGetStakingAPR = () => {
  const [apr, setAPR] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-finance-api.netlify.app/.netlify/functions/server/staking')
        .then((response) => {
          if (response.data) {
            setAPR(response.data.apr)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return apr
}

export const useGetFarmsApr = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-finance-api.netlify.app/.netlify/functions/server/farming')
        .then((response) => {
          // console.log(response)
          if (response.data) {
            setData(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return data
}

const SOY_STAKING_ABI = [
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getAllocationX1000',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'getRewardPerSecond',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    name: 'totalStaked',
    inputs: [],
  },
]
const SOY_STAKING_ADDRESSES = [
  '0xfF9289C2656CA1d194DeA1895aAf3278B744Fa70', // 7
  '0x86F7e2ef599690b64f0063b3F978ea6Ae2814f63', // 30
  '0x7d6C70b6561C31935e6B0dd77731FC63D5aC37F2', // 91
  '0x19DcB402162b6937a8ACEac87Ed6c05219c9bEf7', // 182
  '0x31bFf88C6124E1622f81b3Ba7ED219e5d78abd98', // 365
];

function max(...values) {
  if (values.length < 1) {
    return -Infinity;
  }

  let maxValue = values.shift();

  for (const value of values) {
    if (value > maxValue) {
      maxValue = value;
    }
  }

  return maxValue;
}


export const useStakingAPR = () => {
  const [maxApr, setMaxApr] = useState(0n)

  useEffect(() => {
    const fetchApr = async () => {
      const web3 = new Web3("https://rpc.callisto.network/");

      const aprs: BigInt[] = []

      try {
        for (let i = 0; i < SOY_STAKING_ADDRESSES.length; i++) {
          // @ts-ignore
          const stakingContract = new web3.eth.Contract(SOY_STAKING_ABI, SOY_STAKING_ADDRESSES[i])

          const totalStaked = await stakingContract.methods.totalStaked().call()
          const rewardPerSecond = await stakingContract.methods.getRewardPerSecond().call()
          const multiplier1000 = await stakingContract.methods.getAllocationX1000().call()
          const year = 365 * 24 * 60 * 60 // await stakingContract.methods.lockTime().call()

          console.log(totalStaked);
          console.log(rewardPerSecond);

          console.log(multiplier1000);

          console.log(rewardPerSecond * multiplier1000 * 100n);

          const stakingAPR = (rewardPerSecond * multiplier1000 * BigInt(year) * 10n) / totalStaked;

          console.log(stakingAPR);

          aprs.push(stakingAPR)
        }
      } catch (err) {
        // console.log("useStakingAPR error:", err)
      }

      console.log(aprs);

      setMaxApr(max(...aprs));
    }
    fetchApr()
  }, [])

  return maxApr
}

interface FarmWithAPR {
  name: string | null
  lp: string
  apr: number
  liquidityUSD: number
  token0: string
  token1: string
}

const defaultFarm: FarmWithAPR = {
  name: null,
  lp: '',
  apr: 0,
  liquidityUSD: 0,
  token0: '',
  token1: '',
}

const INFO_CLIENT = 'https://03.callisto.network/subgraphs/name/soyswap'
const SOY_TOKEN_ADDRESS = '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65'

export const useFarmingAPR = () => {
  const [bestFarms, setBestFarms] = useState([{ ...defaultFarm }, { ...defaultFarm }, { ...defaultFarm }])

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        // const coingeckoRequest = await axios.get('https://api.coingecko.com/api/v3/coins/soy-finance')
        // const soyPrice = coingeckoRequest.data.market_data.current_price.usd

        const query = gql`
          query {
            pairs(first: 1000) {
              id
              name
              token0 {
                id
              }
              token1 {
                id
              }
              reserveUSD
            }

            token(id: "${SOY_TOKEN_ADDRESS.toLowerCase()}") {
              tokenDayData(orderBy: date, orderDirection: desc, first: 1) {
                priceUSD
              }
            }
          }
        `
        const data = await request(INFO_CLIENT, query)

        const soyPrice = data.token.tokenDayData[0].priceUSD

        const farmsWithAPRs: FarmWithAPR[] = []
        // eslint-disable-next-line
        for (const farm of Farmlist.farmsInfo) {
          const pair = data.pairs.find((lp) => lp.id.toLowerCase() === farm.lptoken.toLowerCase())
          const apr = (farm.yearlysoyreward * soyPrice) / pair.reserveUSD

          farmsWithAPRs.push({
            name: farm.pair, // pair.name, // sometimes unknown, subgraph issue
            lp: pair.id,
            apr: apr * 100,
            liquidityUSD: pair.reserveUSD,
            token0: pair.token0.id,
            token1: pair.token1.id,
          })
        }

        farmsWithAPRs.sort((a, b) => (a.apr < b.apr ? 1 : -1))

        // console.log(farmsWithAPRs)

        setBestFarms([farmsWithAPRs[0], farmsWithAPRs[1], farmsWithAPRs[2]])
      } catch (err) {
        // console.log(err)
      }
    }
    fetchFarms()
  }, [])

  return bestFarms
}
