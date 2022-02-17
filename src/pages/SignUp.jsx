import { useState } from "react";
import Card from "../Components/UI/Card";
import classes from "./SignUp.module.css"

const SignUp = () => {

    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredName, setEnteredName] = useState("");


  

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(enteredEmail);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(enteredPassword);
  };
  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
    // console.log(enteredPassword);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredEmail, enteredPassword , enteredName);
  };
    return (
        <Card>
          <form onSubmit={formSubmitHandler} className={classes.form}>
            <div>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={nameInputHandler}
                  value={enteredName}
                />
              </div>
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
              
            </div>
          </form>
        </Card>
      );
};


export default SignUp;