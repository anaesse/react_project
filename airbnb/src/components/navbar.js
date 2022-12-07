import logo from '../assets/airbnb.svg';
import '../App.css';

function Navbar() {
  return (
    <nav className="Navbar">
        <img src={logo} className="Airbnb-logo" alt="logo" />
    </nav>
  );
}

export default Navbar;
