import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [homeText, setHomeText] = useState('This is the home screen.');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://gangoffive.up.railway.app/api/great", {
        withCredentials: true,
        responseType: 'text',
      });
      const data = response.data;
      setHomeText(data);
    } catch (error) {
      setHomeText('Failed to fetch data.');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">Managment System</div>
        
        {/* Menu icon visible only on small screens */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li><a href="#about" onClick={(e) => { handleContactClick(e); setMenuOpen(false); }}>About</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Welcome to the Managment System</h1>
        <p>{homeText}</p>
      </header>
    </div>
  );
}

export default App;
