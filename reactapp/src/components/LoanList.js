import React from 'react';
import { useLoan } from '../context/LoanContext';

const LoanList = () => {
  const { loans } = useLoan();

  return (
    <div className="loan-list">
      <h1>Loan List</h1>
      <div className="loans-container">
        {loans.length === 0 ? (
          <p className="no-loans">No loans available</p>
        ) : (
          <div className="loans-grid">
            {loans.map(loan => (
              <div key={loan.id} className="loan-card">
                <h3>{loan.name}</h3>
                <p className="amount">${loan.amount.toLocaleString()}</p>
                <span className={`status ${loan.status.toLowerCase()}`}>
                  {loan.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanList;