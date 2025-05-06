import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NavbarLayout from './components/NavbarLayout'; // make sure path is correct

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
        <Route path="/home" element={<NavbarLayout role={role} handleLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
