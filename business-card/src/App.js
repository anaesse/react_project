import businessCard from './businessCard.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>

      <header className="App-header">
        <img src={businessCard} className="Card-picture" alt="A lady" />
        <div className="Card-info">
          <h2>Sophia Edeki</h2>
          <p>Fullstack Developer</p>
          <small>hjgjgkjhdhskk gg</small>
        </div>
      </header>
      <div className="Btn Container">
        <button className="Btn1">Email</button>
        <button className="Btn2">Linkedin</button>
      </div>

      <div className="About Container">
        <h2>About</h2>
        <p className="P1">gvhgfvhgfsdvuyfthgnbvdkxggvygiuagjbmvjggkdbjhudgjhvvhxvjbhvchvhcvncvhmcvjnmxcjcjhuyhgvdxnchvn</p>
      </div>

      <div className="Interest Container">
        <h2>Interest</h2>
        <p className="P2">gvhgfvhgfsdvuyfthgnbvdkxggvygiuagjbmvjggkdbjhudgjhvvhxvjbhvchvhcvncvhmcvjnmxcjcjhuyhgvdxnchvn</p>
      </div>
      <footer>
        <p>footer</p>
        <p>footer</p>
        <p>footer</p>
        <p>footer</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
