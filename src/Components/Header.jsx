import classes from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
      <div className={classes.logo}>Expense Tracker</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/about" >about</NavLink>
          </li>
          <li>
            <NavLink to="/signin" >signin</NavLink>
          </li>
          <li>
            <NavLink to="/explore" >explore</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    );
};

export default Header;