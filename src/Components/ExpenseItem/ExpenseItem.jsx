import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import { Fragment } from "react";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
 

  return (
          <div className={classes.wrap}>
            <h1>{props.cost}</h1>
            <h5>{props.description}</h5>
          </div>
  );
};


export default ExpenseItem;
