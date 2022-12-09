import star from '../assets/star.png';
import '../App.css';

function Card(props) {
  return (
    <section>

        <div className='Card--details'>

            <img src={`../assets/${props.img}`} className="Card--image" alt="Card" />
            <div className='Ratings'>
            <img src={star} className="Star--image" alt="Ratings" />
            <span>{props.rating}</span>
            <span className='Card--rating'>({props.reviewCount}) . </span>
            <span className='Card--rating'>{props.country}</span>
            </div>
            <p className='Card--desc'>{props.title}</p>
            <p className='Card--cost'><span> From  ${props.price} </span>/ person
            </p>
        </div>
    </section>
  );
}

export default Card;
