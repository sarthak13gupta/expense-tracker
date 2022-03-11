import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { logOut } from "../authentication";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Expense Tracker</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            {user && (
              <NavLink to="/" onClick={logOut}>
                LogOut
              </NavLink>
            )}
            {!user && <NavLink to="/signin">LogIn</NavLink>}
          </li>
          <li>
            <NavLink to="/explore">explore</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
