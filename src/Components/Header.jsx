import classes from "./Header.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { logOut } from "../authentication";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addDoc , collection , query , where , getDocs } from "firebase/firestore/lite";
import { selectUserName } from "../store/user";
import db from "../firebase";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  // console.log(user);

  useEffect( async () =>  {
    if (user) {
      try {

        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                // name: user.displayName,
                // authProvider: "google",
                email: user.email,
                // photo: user.photoURL,
            });
        }



    } catch (err) {
        alert(err.message);
    }
      setUser(user);
    }
    // else navigate("/");
  },[user]);

  const setUser = (user) => {


    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const userPhoto = useSelector(selectUserPhoto);

  console.log(userPhoto);

  const LogOut = () => {
    setSignOutState();
    logOut();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/home">Expense Tracker</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            {user && (
              <NavLink to="/" onClick={LogOut}>
                LogOut
              </NavLink>
            )}
            {!user && <NavLink to="/signin">LogIn</NavLink>}
          </li>
          {/* <li>
            <NavLink to="/explore">explore</NavLink>
          </li> */}
          {user && 
          <li>
          <NavLink to="/home/profile">
            <img
              className={classes.avatar}
              src={userPhoto}
              alt="avatar"
            ></img>
          </NavLink>
        </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
