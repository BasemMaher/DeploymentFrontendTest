import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // 🌐 icon
import './Navbar.css';

function NavbarLayout({ role, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem('appLang') || 'zh';
    i18n.changeLanguage(lang);
  }, [i18n]);

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('appLang', newLang);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        variant="dark"
        className="navbar-custom"
        expanded={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => handleNavClick('/home')}
            className="fw-bold"
            style={{ cursor: 'pointer' }}
          >
            {t('navbar.title')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/home')}>
                {t('navbar.home')}
              </Nav.Link>

              {role === 'admin' && (
                <>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/sales')}>
                    {t('navbar.sales')}
                  </Nav.Link>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/inventory')}>
                    {t('navbar.inventory')}
                  </Nav.Link>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/Stocks')}>
                    {t('navbar.stocks')}
                  </Nav.Link>
                </>
              )}

              {role === 'sales' && (
                <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/sales')}>
                  {t('navbar.sales')}
                </Nav.Link>
              )}

              {role === 'inventory' && (
                <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/inventory')}>
                  {t('navbar.inventory')}
                </Nav.Link>
              )}

              <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/StockStatistics')}>
                {t('navbar.statistics')}
              </Nav.Link>

              <Nav.Link className="custom-nav-item" onClick={handleLogoutClick}>
                {t('navbar.logout')}
              </Nav.Link>

              {/* 🌐 Language Toggle Icon */}
              <Nav.Link className="custom-nav-item" onClick={toggleLanguage} title="Toggle Language">
                <FaGlobe size={18} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: '90px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default NavbarLayout;
