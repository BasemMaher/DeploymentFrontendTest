import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaBolt } from 'react-icons/fa'; // Electric icon

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let assignedRole = '';
    if (username === 'admin' && password === '123') {
      assignedRole = 'admin';
    } else if (username === 'sales' && password === '123') {
      assignedRole = 'sales';
    } else if (username === 'inventory' && password === '123') {
      assignedRole = 'inventory';
    } else {
      alert('Invalid username or password.');
      return;
    }

    onLogin(assignedRole);
    navigate('/home');
  };

  return (
    <div className="login-wrapper">
      <div className="login-card shadow-lg">
        <div className="icon-circle">
          <FaBolt className="electric-icon" />
        </div>
        <h2 className="login-title">Electric Co. Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
