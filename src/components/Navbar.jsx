import "../styles/navbar.css";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className="menu-icon">
        <FiMenu />
      </div>
    </nav>
  );
}

export default Navbar;