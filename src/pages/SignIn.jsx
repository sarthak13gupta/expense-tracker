import classes from "./SignIn.module.css";
import Card from "../Components/UI/Card";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { logInWithEmailAndPassword, signInWithGoogle } from "../authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { setUserLoginDetails } from "../store/user";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      //loading spinner
      return;
    }

    if (user)
    {
      console.log(user);
      // setUser(user)
      navigate("/home");

    } 
  },[user, loading]);

  const setUser = (user) => {

    dispatch(
      setUserLoginDetails({
        name:user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  const emailPasswordLogin = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    logInWithEmailAndPassword(enteredEmail, enteredPassword);

    console.log(enteredEmail, enteredPassword);
  };

  const googleSignIn = () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    signInWithGoogle(enteredEmail, enteredPassword);
  };

  return (
    <Card>
      <form className={classes.form}>
        <div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className={classes.actions}>
            <button onClick={emailPasswordLogin}>SignIn</button>
          </div>
          <button onClick={googleSignIn}>Login With Google</button>

          <div>
            <Link to="/signin/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </form>
    </Card>
  );
};


export default SignIn;
