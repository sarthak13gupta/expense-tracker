import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import { Fragment } from "react";
const ExpenseItem = (props) => {
 

  return (
    
    <li>
      <Card>
      <h3>{props.description}</h3>
      <p>{props.cost}</p>
      </Card>
    </li>
  );
};


export default ExpenseItem;
