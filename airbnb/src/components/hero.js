import logo from '../assets/hero.png';
import '../App.css';

function Hero() {
  return (
    <section className='Hero'>
        <img src={logo} className="Hero--image" alt="Hero" />
        <h1 className='Hero--header'>Online Experiences</h1>
        <p className='Hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
  );
}

export default Hero;
