import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Loan Manager</h3>
            <p>Professional loan management solution for your financial needs.</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <p>• Easy loan tracking</p>
            <p>• Status management</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@loanmanager.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Loan Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;