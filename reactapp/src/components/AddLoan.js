import React, { useState } from 'react';
import { useLoan } from '../context/LoanContext';
import { useNavigate } from 'react-router-dom';

const AddLoan = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    status: 'Pending'
  });
  const { addLoan } = useLoan();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount) {
      addLoan({
        name: formData.name,
        amount: parseFloat(formData.amount),
        status: formData.status
      });
      setFormData({ name: '', amount: '', status: 'Pending' });
    }
  };

  return (
    <div className="add-loan">
      <h1>Add New Loan</h1>
      <form onSubmit={handleSubmit} className="loan-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Loan Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            placeholder="Loan Amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Add Loan
        </button>
      </form>
    </div>
  );
};

export default AddLoan;