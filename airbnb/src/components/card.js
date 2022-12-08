import star from '../assets/star.png';
import '../card.png'
import '../card2.png'
import '../card3.png'
import '../App.css';

function Card(props) {
  return (
    <section >
      <div className='Card--container'>

        <div className='Card--details'>

            <img src={props.img} className="Card--image" alt="Card" />
            <div className='Ratings'>
            <img src={star} className="Star--image" alt="Ratings" />
            <span>{props.rating1}</span>
            <span className='Card--rating'>{props.rating2} </span>
            <span className='Card--rating'>USA</span>
            </div>
            <p className='Card--desc'>{props.cardDesc}</p>
            <p className='Card--cost'><span>{props.cardCost} </span>/ person
            </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
