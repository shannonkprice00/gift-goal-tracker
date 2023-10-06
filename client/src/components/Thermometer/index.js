import React, { useEffect, useState } from "react";
import { QUERY_DONATIONS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import "./thermometer.css";

function Thermometer() {
  const [mercuryHeight, setMercuryHeight] = useState(0);
  const [collectedAmount, setCollectedAmount] = useState(0);
  const MAX_HEIGHT = 500;
  const goalAmount = 4500;
  const { loading, data } = useQuery(QUERY_DONATIONS);

  useEffect(() => {
    // Check if data has loaded and is not in the loading state
    if (!loading && data && data.donations) {
      // Calculate the sum of donation amounts
      const totalDonationAmount = data.donations.reduce(
        (accumulator, donation) => accumulator + donation.amount,
        0
      );

      // Set the collectedAmount state with the calculated sum
      setCollectedAmount(totalDonationAmount);
    }
  }, [loading, data]);

  useEffect(() => {
    // Calculate the percentage of collectedAmount relative to goalAmount
    const percentage = (collectedAmount / goalAmount) * 100;

    // Calculate the height of the "mercury" element based on the percentage
    const newMercuryHeight = (percentage / 100) * MAX_HEIGHT; // Adjust as needed

    // Update the "mercury" height in the component's state
    setMercuryHeight(newMercuryHeight);
  }, [collectedAmount, goalAmount]);

  return (
    <div className="thermometer-container">
      <div className="goal">Goal: ${goalAmount}</div>
      <div className="thermometer">
        <div className="mercury" style={{ height: `${mercuryHeight}px` }}></div>
      </div>
      <div className="collected">Collected: ${collectedAmount}</div>
    </div>
  );
}

export default Thermometer;
