import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/User.svg";
import Notification from "../assets/Notification.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/shop">Home</Link>
        <Link to="/New">Appointment</Link>

        <Link to="/sale">Sale</Link>
      </div>

      <div className="nav-actions">
        <Link to="/Signin_up">
          <img src={user} alt="user logo" />
        </Link>

        <Link to="/Signin_up">
          <img src={Notification} alt="notification logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
