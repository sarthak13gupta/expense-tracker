import { useEffect, useRef} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate , Link } from "react-router-dom";
import { registerWithEmailAndPassword  , signInWithGoogle} from "../authentication";
import Card from "../Components/UI/Card";
import classes from "./SignUp.module.css";
import {auth} from "../firebase";

const SignUp = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      //loading spinner
      return;
    }

    if (user) navigate("/home");
  },[user, loading]);

  const registerHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword, enteredName);

    registerWithEmailAndPassword(enteredName, enteredEmail, enteredPassword);
  };

  
  return (
    <Card>
      <form className={classes.form}>
        <div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInputRef} required/>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} required/>
          </div>
          <div className={classes.actions}>
            <button onClick={registerHandler}>Register</button>
          </div>
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div>
            Already have an account? <Link to="/signin">Login</Link> now.
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SignUp;
