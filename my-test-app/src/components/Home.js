import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBolt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation(); // Access i18n instance
  const [HomeText, setHomeText] = useState(t('loading'));
  const [loading, setLoading] = useState(true);


  // Set language from localStorage before anything renders
  useEffect(() => {
    console.log(localStorage.getItem('appLang') );
    
    const savedLang = localStorage.getItem('appLang') || 'zh';
    i18n.changeLanguage(savedLang); // Apply language
  }, [i18n]);

  // Fetch the home text
  useEffect(() => {
    const fetchHomeText = async () => {
      try {
        const response = await axios.get("https://gangoffive.up.railway.app/api/great", {
          withCredentials: true,
          responseType: 'text',
        });
        setHomeText(response.data);
      } catch (error) {
        setHomeText(t('errorFetching'));
        console.error('Error:', error);
      } finally {
        console.log(loading);
        
        setLoading(false);
      }
    };

    fetchHomeText();
  });

  return (
    <header className="text-center p-5 bg-light">
      <div className="icon-circle">
        <FaBolt className="electric-icon" />
      </div>

      <h1 className="display-5 fw-semibold mt-2">{t('welcome')}</h1>

      <p className="lead mt-3">
        <center>{HomeText}</center>
      </p>
    </header>
  );
}

export default Home;
