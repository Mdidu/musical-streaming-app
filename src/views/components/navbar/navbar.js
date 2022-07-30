import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarComponent() {
  return (
    <nav>
      <ul>
        <li id="navbar-home">
          <Link to="/" class="navbar-item">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
