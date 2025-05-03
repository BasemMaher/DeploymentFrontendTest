import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">Gang of Five</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Welcome to the Gang of Five</h1>
        <p>This is the home screen.</p>
      </header>
    </div>
  );
}

export default App;
