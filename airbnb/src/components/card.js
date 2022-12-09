import star from '../assets/star.png';
import '../App.css';

function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <section>

        <div className='Card--details'>
            {badgeText && <div className='Card--badge'>{badgeText}</div>}
            <img src={`../assets/${props.item.img}`} className="Card--image" alt="Card" />
            <div className='Ratings'>
            <img src={star} className="Star--image" alt="Ratings" />
            <span>{props.item.rating}</span>
            <span className='Card--rating'>({props.item.reviewCount}) . </span>
            <span className='Card--rating'>{props.item.location}</span>
            </div>
            <p className='Card--desc'>{props.item.title}</p>
            <p className='Card--cost'><span> From  ${props.item.price} </span>/ person
            </p>
        </div>
    </section>
  );
}

export default Card;
