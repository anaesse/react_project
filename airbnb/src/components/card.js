import star from '../assets/star.png';
import '../App.css';

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <section>

        <div className='Card--details'>
            {badgeText && <div className='Card--badge'>{badgeText}</div>}
            <img src={`../assets/${props.img}`} className="Card--image" alt="Card" />
            <div className='Ratings'>
            <img src={star} className="Star--image" alt="Ratings" />
            <span>{props.rating}</span>
            <span className='Card--rating'>({props.reviewCount}) . </span>
            <span className='Card--rating'>{props.location}</span>
            </div>
            <p className='Card--desc'>{props.title}</p>
            <p className='Card--cost'><span> From  ${props.price} </span>/ person
            </p>
        </div>
    </section>
  );
}

export default Card;
