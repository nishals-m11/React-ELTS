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
    setLoans(prev => [...prev, { ...loan, id: Date.now() }]);
  };

  return (
    <LoanContext.Provider value={{ loans, addLoan }}>
      {children}
    </LoanContext.Provider>
  );
};