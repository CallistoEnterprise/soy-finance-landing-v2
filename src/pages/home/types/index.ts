import {FixedNumber} from "ethers";

export interface Address {
  20729?: string
  820?: string
  199?: string
  61?: string
}

export interface Token {
  symbol: string
  address?: Address
  decimals?: number
  projectLink?: string
  usdcPrice?: FixedNumber
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  token: Token
  quoteToken: Token
  localFarmAddresses?: Address
  multiplier?: BigInt
  isCommunity?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolData {
  address: string

  token0: {
    name: string
    symbol: string
    address: string
  }

  token1: {
    name: string
    symbol: string
    address: string
  }

  volumeUSD: number
  volumeUSDChange: number
  volumeUSDWeek: number
  volumeUSDChangeWeek: number

  totalFees24h: number
  totalFees7d: number
  lpFees24h: number
  lpFees7d: number
  lpApr7d: number

  liquidityUSD: number
  liquidityUSDChange: number

  token0Price: number
  token1Price: number

  liquidityToken0: number
  liquidityToken1: number
}

