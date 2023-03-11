import "react-native-get-random-values";
import "@ethersproject/shims";

import { ethers } from "ethers";

const url = "https://rpc.ankr.com/eth";

export async function getWalletMnemonic(mnemonic: string) {
  const provider = new ethers.providers.JsonRpcProvider(url);
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  const address = await wallet.getAddress();
  const privateKey = wallet.privateKey;
  const balance = await provider.getBalance(address);
  return { address, privateKey, balance: ethers.utils.formatEther(balance) };
}

export async function getWalletPrivatekey(pkey: string) {
  const provider = new ethers.providers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(pkey, provider);
  const address = await wallet.getAddress();
  const privateKey = wallet.privateKey;
  const balance = await provider.getBalance(address);
  return { address, privateKey, balance: ethers.utils.formatEther(balance) };
}
