import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore/lite";
import db from "../../firebase";
import { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";
import {FiEdit2} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";



const UpdateExpense = (props) => {
  let toggleUpdate = false;

  // const updateCostInputRef = useRef();
  // const updateDescriptionInputRef = useRef();

  const dispatch = useDispatch();

  const updatedDescription = useSelector(state => state.expense.description);
  const updatedCost = useSelector(state => state.expense.cost);

  const updateExpenseHandler = (event) => {
    event.preventDefault();

    dispatch(uiActions.setUpdateModal());

    // const updatedCost = updateCostInputRef.current.value;
    // const updatedDescription = updateDescriptionInputRef.current.value;

    

    // const docRef = doc(db, "expenses", id);

    // try {
    //   await updateDoc(docRef, {
    //     cost: updatedCost,
    //     description: updatedDescription,
    //   });
    // } catch (err) {
    //   alert(err);
    // }
  };

 

  return (
    <Fragment>
      <FiEdit2 className={classes.icon} onClick={updateExpenseHandler}/>
    </Fragment>
  );
};

export default UpdateExpense;
