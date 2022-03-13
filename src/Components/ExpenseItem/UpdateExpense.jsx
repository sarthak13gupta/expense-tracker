import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore/lite";
import db from "../../firebase";
import { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./UpdateExpense.module.css";

const UpdateExpense = (props) => {
  let toggleUpdate = false;

  const updateCostInputRef = useRef();
  const updateDescriptionInputRef = useRef();

  const UpdateFormHandler = () => {
   toggleUpdate = !toggleUpdate;


   console.log(toggleUpdate , props.id);
  }

  const updateExpenseHandler = async (event) => {
    event.preventDefault();
    // UpdateFormHandler();

    const updatedCost = updateCostInputRef.current.value;
    const updatedDescription = updateDescriptionInputRef.current.value;

    const docRef = doc(db, "expenses", props.id);

    try {
      await updateDoc(docRef, {
        cost: updatedCost,
        description: updatedDescription,
      });
    } catch (err) {
      alert(err);
    }
  };

 

  return (
    <Fragment>
      {!toggleUpdate && <button onClick={UpdateFormHandler}>Update</button>}
      {toggleUpdate && (
        // <Card>
            
          <div>
            Update Expense
            <form className={classes.form}>
              <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  ref={updateDescriptionInputRef}
                  required
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="cost">Cost</label>
                <input
                  type="text"
                  id="description"
                  ref={updateCostInputRef}
                  required
                />
              </div>
              <div className={classes.actions}>
                <button onClick={updateExpenseHandler}>AddExpense</button>
              </div>
            </form>
          </div>
        // </Card>
      )}
    </Fragment>
  );
};

export default UpdateExpense;
