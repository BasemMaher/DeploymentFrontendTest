import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Import Button from React-Bootstrap
import axios from 'axios';

function Home({ role }) {  // Accept the role prop
  const [HomeText, setHomeText] = useState("This is the Home Page.");

  const handleAboutClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://gangoffive.up.railway.app/api/great", {
        withCredentials: true,
        responseType: 'text',
      });
      setHomeText(response.data);
    } catch (error) {
      setHomeText('Error fetching data:');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <header className="text-center p-5 bg-light">
      <h1 className="display-5 fw-semibold">Welcome to the Management System</h1>
      
      {/* Display role-specific message */}
      <p className="lead mt-3">
        <center>Role: <strong>{role}</strong></center>
      </p>

      <p className="lead mt-3" ><center>{HomeText}</center></p>

      {/* Red Button with rounded border */}
      <center> <Button 
        variant="danger" 
        className="mt-4 px-5 py-2 rounded" 
        style={{marginTop : 10 ,minWidth :100,maxWidth: 200 }}
        onClick={handleAboutClick}
      >
        Fetch Data
      </Button></center>
     
    </header>
  );
}

export default Home;
