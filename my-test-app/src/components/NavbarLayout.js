import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';
import './Navbar.css';

function NavbarLayout({ role, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
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
            Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/home')}>
                Home
              </Nav.Link>

              {role === 'admin' && (
                <>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/sales')}>
                    Sales
                  </Nav.Link>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/inventory')}>
                    Inventory
                  </Nav.Link>
                  <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/Stocks')}>
                  Stocks 
                  </Nav.Link>
                </>
              )}

              {role === 'sales' && (
                <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/sales')}>
                  Sales
                </Nav.Link>
              )}

              {role === 'inventory' && (
                <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/inventory')}>
                  Inventory
                </Nav.Link>
              )}
               <Nav.Link className="custom-nav-item" onClick={() => handleNavClick('/StockStatistics')}>
              Statistics 
                  </Nav.Link>

              <Nav.Link className="custom-nav-item" onClick={handleLogoutClick}>
                LogOut
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: '90px'}}>
        <Outlet />
      </div>
    </>
  );
}

export default NavbarLayout;
