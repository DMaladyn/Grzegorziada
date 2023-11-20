import { Link } from "react-router-dom";

import classes from "./mainNavigation.module.css";

/* MainNavigation is top-bar responsible for navigation on the site using Links */
function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <Link to="/grzegorzada">Etap I</Link>
        </li>
        <li>
          <Link to="/grzegorzada">GRZEGORZADA</Link>
        </li>
        <li>
          <Link to="/grzegorzada/final">Finał</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
