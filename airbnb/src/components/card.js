import card from '../assets/card.png';
import star from '../assets/star.png';
import '../App.css';

function Card() {
  return (
    <section >
        <div className='Card--details'>

            <img src={card} className="Card--image" alt="Card" />
            <div className='Ratings'>
            <img src={star} className="Star--image" alt="Ratings" />
            <span>5.0</span>
            <span className='Card--rating'>(6) . </span>
            <span className='Card--rating'>USA</span>
            </div>
            <p className='Card--desc'>Life lessons with Katie Zaferes
    </p>
            <p className='Card--cost'><span>From $136 </span>/ person
    </p>
        </div>
    </section>
  );
}

export default Card;
