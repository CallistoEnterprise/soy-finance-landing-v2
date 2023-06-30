import axios from 'axios'
import { useEffect, useState } from 'react'
import {JsonRpcProvider} from "ethers";
import {Contract} from "ethers";

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
      const provider = new JsonRpcProvider("https://rpc.callisto.network/")


      const aprs: BigInt[] = []

      try {
        for (let i = 0; i < SOY_STAKING_ADDRESSES.length; i++) {
          // @ts-ignore
          const stakingContract = new Contract(SOY_STAKING_ADDRESSES[i], SOY_STAKING_ABI, provider);

          const totalStaked = await stakingContract["totalStaked"]();
          const rewardPerSecond = await stakingContract["getRewardPerSecond"]();
          const multiplier1000 = await stakingContract["getAllocationX1000"]();
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
        console.log("useStakingAPR error:", err);
      }

      console.log(aprs);

      setMaxApr(max(...aprs));
    }
    fetchApr()
  }, [])

  return maxApr
}
