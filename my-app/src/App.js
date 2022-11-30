import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="App-brand">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Phieeyah</h1>
          </div>
          <ul className="App-navLinks">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;