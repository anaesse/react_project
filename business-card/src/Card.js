import businessCard from './businessCard.jpg';
import './App.css';

function Card() {
  return (
    <div className='Card-container'>

      <header className="App-header">
        <img src={businessCard} className="Card-picture" alt="A lady" />
        <div className="Card-info">
          <h2>Sophia Edeki</h2>
          <p>Fullstack Developer</p>
          <small>Javascript Python</small>
        </div>
      </header>
      <div className="Btn Container">
        <button className="Btn1">Email</button>
        <button className="Btn2">Linkedin</button>
      </div>

    </div>


  );
}

export default Card;
