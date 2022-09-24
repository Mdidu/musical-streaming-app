import { Link } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../../utilities/constantes-path";
import styles from "./navbar.css";

export function NavbarComponent() {
  return (
    <nav>
      <ul>
        <li id="navbar-home">
          <Link to={HOME_PAGE_PATH} className={styles.navbar_item}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
