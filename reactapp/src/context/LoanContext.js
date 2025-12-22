import React, { createContext, useContext, useState } from 'react';

const LoanContext = createContext();

export const useLoan = () => {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
};

export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState([]);

  const addLoan = (loan) => {
    const newLoan = {
      id: Date.now(),
      ...loan
    };
    setLoans(prev => [...prev, newLoan]);
  };

  const value = {
    loans,
    addLoan
  };

  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>
  );
};