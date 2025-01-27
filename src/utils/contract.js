import { ethers } from "ethers";
import contractABI from "../contracts/BoomTokenReward.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const getContract = async () => {
    if (!window.ethereum) throw new Error("MetaMask is not installed");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
