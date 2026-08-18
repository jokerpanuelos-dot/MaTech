import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">MaTech</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
