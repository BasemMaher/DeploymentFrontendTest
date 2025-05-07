import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import NavbarLayout from './components/NavbarLayout';
import Home from './components/Home';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Stocks from './components/Stocks';
import StockStatistics from './components/StockStatistics';  // Added import for new screen

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (assignedRole) => {
    setRole(assignedRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {role && (
          <Route path="/" element={<NavbarLayout role={role} handleLogout={handleLogout} />}>
            <Route path="home" element={<Home role={role} />} />
            <Route path="sales" element={<Sales />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="stockStatistics" element={<StockStatistics />} /> {/* Added route for statistics */}
            <Route index element={<Navigate to="home" replace />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
