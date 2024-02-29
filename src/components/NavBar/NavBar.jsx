import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Nourish Nest
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/search" className="navbar-link">
          Search
        </Link>
        <Link to="/cart" className="navbar-link">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;