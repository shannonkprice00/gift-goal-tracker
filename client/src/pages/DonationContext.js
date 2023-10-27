import React, { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const useDonationContext = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [collectedAmount, setCollectedAmount] = useState(0);

  const updateCollectedAmount = (amount) => {
    setCollectedAmount((prevAmount) => prevAmount + amount);
  };

  return (
    <DonationContext.Provider value={{ collectedAmount, updateCollectedAmount }}>
      {children}
    </DonationContext.Provider>
  );
};

