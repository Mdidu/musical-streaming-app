import { Link } from "react-router-dom";
import styles from "./navbar.css";

export function NavbarComponent() {
  return (
    <nav>
      <ul>
        <li id="navbar-home">
          <Link to="/" className={styles.navbar_item}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
