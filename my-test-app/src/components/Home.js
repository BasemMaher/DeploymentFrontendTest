import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBolt } from 'react-icons/fa';

function Home({ role }) {
  const [HomeText, setHomeText] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  console.log(loading);
  useEffect(() => {
    const fetchHomeText = async () => {
      try {
        const response = await axios.get("https://gangoffive.up.railway.app/api/great", {
          withCredentials: true,
          responseType: 'text',
        });
        setHomeText(response.data);
      } catch (error) {
        setHomeText('Error fetching data.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeText();
  }, []);

  return (
    <header className="text-center p-5 bg-light">
      {/* ⚡ Electric Icon in light yellow */}
 <div className="icon-circle">
          <FaBolt className="electric-icon" />
        </div>
      <h1 className="display-5 fw-semibold mt-2">Welcome to the Management System</h1>

      <p className="lead mt-3">
        <center>Role: <strong>{role}</strong></center>
      </p>

      <p className="lead mt-3">
        <center>{HomeText}</center>
      </p>
    </header>
  );
}

export default Home;
