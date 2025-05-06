import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // optional styling

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Define role based on username and password
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

    // After assigning the role, pass it to the onLogin function
    onLogin(assignedRole);
    navigate('/home'); // Redirect to home page after successful login
  };

  return (
  
    <div className="d-flex justify-content-center align-items-center bg-light"  style={{marginTop : 200}}>
      <form className="p-4 shadow rounded bg-white" onSubmit={handleLogin} style={{ width: '300px' }}>
        <h4 className="text-center mb-4">Login</h4>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
