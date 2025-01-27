import React, { useState } from "react";
import { getContract } from "../utils/contract";

const StakeTokens = () => {
    const [amount, setAmount] = useState("");

    const handleStake = async () => {
        try {
            const contract = await getContract();
            const tx = await contract.stake(ethers.utils.parseEther(amount));
            await tx.wait();
            alert("Tokens Staked Successfully!");
        } catch (error) {
            console.error("Error staking tokens:", error);
            alert("Failed to stake tokens.");
        }
    };

    return (
        <div>
            <h3>Stake Boom Tokens</h3>
            <input
                type="text"
                placeholder="Amount to Stake"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleStake}>Stake</button>
        </div>
    );
};

export default StakeTokens;
