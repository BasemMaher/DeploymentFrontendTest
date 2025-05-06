import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {  Nav, Container, Navbar } from 'react-bootstrap';
import './Navbar.css';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

function NavbarLayout({role,handleLogout}) {
  const [menuOpen, setMenuOpen] = useState(false); // control expanded menu
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleNavClick = (text) => {
    setMenuOpen(false); // close menu after click
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
          <Navbar.Brand href="#" className="fw-bold">Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-item" onClick={() => handleNavClick('This is the home screen.')}>Home</Nav.Link>
              <Nav.Link href="#sales" className="nav-item" onClick={() => handleNavClick('Sales page content.')}>Sales</Nav.Link>
              <Nav.Link href="#inventory" className="nav-item" onClick={() => handleNavClick('Inventory page content.')}>Inventory</Nav.Link>
              <Nav.Link href="#logout" className="nav-item" onClick={handleLogoutClick}>LogOut</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/> <br/> <br/>  <br/>  <br/>  <br/>
      <Home role={role}/>
    </>
  );
}

export default NavbarLayout;
