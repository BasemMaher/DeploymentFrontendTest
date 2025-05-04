import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [homeText, setHomeText] = useState('This is the home screen.');



 

  const handleContactClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://gangoffive.up.railway.app/api/great");
      const data = response.data;
      console.log("data", data);
      setHomeText(data);
    } catch (error) {
      setHomeText('Failed to fetch data.');
      console.error('Error fetching data:', error);
    }
  };
  

  

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">Gang of Five</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Welcome to the Gang of Five</h1>
        <p>{homeText}</p>
      </header>
    </div>
  );
}

export default App;
