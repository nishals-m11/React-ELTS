import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoanProvider } from './context/LoanContext';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LoanProvider>
        <Router>
          <App />
        </Router>
      </LoanProvider>
    </React.StrictMode>
  );
}