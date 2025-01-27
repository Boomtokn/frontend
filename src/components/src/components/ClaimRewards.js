import React from "react";
import { getContract } from "../utils/contract";

const ClaimRewards = () => {
    const handleClaim = async () => {
        try {
            const contract = await getContract();
            const tx = await contract.claimRewards();
            await tx.wait();
            alert("Rewards Claimed Successfully!");
        } catch (error) {
            console.error("Error claiming rewards:", error);
            alert("Failed to claim rewards.");
        }
    };

    return (
        <div>
            <h3>Claim Rewards</h3>
            <button onClick={handleClaim}>Claim Rewards</button>
        </div>
    );
};

export default ClaimRewards;
