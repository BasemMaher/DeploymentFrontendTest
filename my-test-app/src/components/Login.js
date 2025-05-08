import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaBolt, FaGlobe } from 'react-icons/fa'; // Import globe icon
import { useTranslation } from 'react-i18next';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Set default language if it's not set in localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('appLang');
    if (!savedLang) {
      localStorage.setItem('appLang', 'en'); // Default to English
    } else {
      i18n.changeLanguage(savedLang); // Set language from localStorage
    }
  }, [i18n]);

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
      alert(t('login.invalidCredentials'));
      return;
    }

    onLogin(assignedRole, localStorage.getItem('appLang'));
    navigate('/home');
  };

  const handleLanguageChange = () => {
    const currentLang = localStorage.getItem('appLang') || 'en';
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('appLang', newLang);
  };

  

  return (
    <div className="login-wrapper">
      <div className="login-card shadow-lg">
        <div className="icon-circle">
          <FaBolt className="electric-icon" />
        </div>
        <h2 className="login-title">{t('login.title')}</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder={t('login.username')}
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder={t('login.password')}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-login">{t('login.button')}</button>
        </form>

        {/* Language Switch and Current Language */}
        <div className="lang-switch-wrapper">
          <div onClick={handleLanguageChange} className="lang-switch" title="Switch Language">
            <FaGlobe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
