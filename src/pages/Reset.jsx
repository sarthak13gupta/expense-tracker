import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth} from "../firebase";
import { sendPasswordReset } from "../authentication";
import classes from "./Reset.module.css";
const Reset = () =>  {

const emailInputRef = useRef();

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  const passwordResetHandler = () => {

    const enteredEmail = emailInputRef.current.value;

    sendPasswordReset(enteredEmail);

  }


  return (
    <div className={classes.reset}>
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          ref = {emailInputRef}
          required
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={passwordResetHandler}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
