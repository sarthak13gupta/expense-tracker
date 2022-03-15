import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import { Fragment } from "react";
import classes from "./ExpenseItem.module.css";
// import {AiFillDelete} from "react-icons/ai"
import DeleteExpense from "./DeleteExpense";
import UpdateExpense from "./UpdateExpense";

const ExpenseItem = (props) => {
  return (
    <div className={classes.wrap}>
      <h1>{props.cost}</h1>
      <h5>{props.description}</h5>
      <span className={classes.icon}>
        <UpdateExpense className={classes.icon}/>
        <DeleteExpense className={classes.icon}/>
      </span>
      
      {/* <div className={classes.icon}>
        <AiFillDelete/>
      </div> */}
      
      
     
    </div>
  );
};

export default ExpenseItem;
