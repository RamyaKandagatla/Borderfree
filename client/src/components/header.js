import "./header.css";
import logo from "../images/myntra.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="menu">
        <ul>
          <li>Bag</li>
          <li>Wishlist</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
