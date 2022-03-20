import Header from "../Components/Header";
import classes from "./landingPage.module.css";
import { Fragment } from "react";
import Card from "../Components/UI/Card";
import { Link } from "react-router-dom";
const LandingPage = () => {

  return (
    <Card>
      <div className={classes.container}>
        <h1>HELLO!!</h1>
        <h2>Welcome to Expense Tracker</h2>
        <Link to="/register" >start your journery by SignUp</Link>
      </div>
    </Card>
  );
};

export default LandingPage;
