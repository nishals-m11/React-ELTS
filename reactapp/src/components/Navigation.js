import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Loan Manager</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Loan List
            </Link>
          </li>
          <li>
            <Link 
              to="/add-loan" 
              className={location.pathname === '/add-loan' ? 'active' : ''}
            >
              Add Loan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;