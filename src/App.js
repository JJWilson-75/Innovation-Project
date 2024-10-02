import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import TradingPage from './components/TradingPage'

const App = () => {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trade" element={<TradingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </AuthProvider>
  );
};

export default App;