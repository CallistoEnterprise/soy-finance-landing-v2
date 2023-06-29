import {useMemo} from "react";
import {Contract, JsonRpcProvider} from "ethers";
import MULTICALL_ABI from "../../abis/interfaces/multicall.json";
import {useWeb3} from "../../../processes/web3/hooks/useWeb3";
import {ChainId} from "@callisto-enterprise/soy-sdk";

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

export function useMultiCallContract() {
  const {chainId, web3Provider} = useWeb3();

  return useMemo(() => {
    return chainId && web3Provider ? new Contract(
      MULTICALL_NETWORKS[chainId],
      MULTICALL_ABI,
      web3Provider
    ) : null;
  }, [chainId, web3Provider]);
}

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
