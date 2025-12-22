import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoanProvider } from './context/LoanContext';
import Navigation from './components/Navigation';
import LoanList from './components/LoanList';
import AddLoan from './components/AddLoan';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LoanProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LoanList />} />
              <Route path="/add-loan" element={<AddLoan />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LoanProvider>
  );
}

export default App;