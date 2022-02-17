import classes from "./SignIn.module.css";
import Card from "../Components/UI/Card";
import { useState } from "react";
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(enteredEmail);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(enteredPassword);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredEmail, enteredPassword);
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={emailInputHandler}
              value={enteredEmail}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordInputHandler}
              value={enteredPassword}
            />
          </div>
          <div className={classes.actions}>
            <button >SignIn</button>
          </div>
          <div className={classes.actions}>
            <Link to="/signup" >Signup</Link>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SignIn;
