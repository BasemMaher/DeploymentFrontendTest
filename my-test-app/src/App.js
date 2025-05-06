import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [homeText, setHomeText] = useState('This is the home screen.');
  const [menuOpen, setMenuOpen] = useState(false); // control expanded menu

  const handleAboutClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://gangoffive.up.railway.app/api/great", {
        withCredentials: true,
        responseType: 'text',
      });
      setHomeText(response.data);
    } catch (error) {
      setHomeText('Failed to fetch data.');
      console.error('Error fetching data:', error);
    }
    setMenuOpen(false); // close menu after click
  };

  const handleNavClick = (text) => {
    setHomeText(text);
    setMenuOpen(false); // close menu after click
  };

  return (
    <div className="App">
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
              <Nav.Link href="#about" className="nav-item" onClick={handleAboutClick}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="main-header text-center p-5">
        <h1 className="display-4 fw-semibold">Welcome to the Management System</h1>
        <p className="lead mt-3">{homeText}</p>
      </header>
    </div>
  );
}

export default App;
