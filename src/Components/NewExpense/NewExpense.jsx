import { addDoc , collection , Timestamp , query } from "firebase/firestore/lite";
import {  useRef} from "react";
import Card from "../UI/Card";
import classes from "./NewExpense.module.css";
import db from "../../firebase";

const NewExpense = () => {
  let descriptionInputRef = useRef();
  let costInputRef = useRef();
  

  const addExpenseHandler = async (event) => {

    event.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;
    const enteredCost = costInputRef.current.value;
    console.log(enteredCost , enteredDescription);
    descriptionInputRef = "";
    costInputRef = "";

    try {
        const collectionRef = collection(db , "expenses");
        await addDoc(collectionRef , {
            description: enteredDescription,
            cost: enteredCost,
            created: Timestamp.now(),
        })
    }catch(err){
        alert(err.message);
    }

    

    

  };

  return (
    <Card>
      <div>Add new Expense
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            ref={descriptionInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="description"
            ref={costInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
            <button onClick={addExpenseHandler}>AddExpense</button></div>
      </form>
      </div>
    </Card>
  );
};

export default NewExpense;
