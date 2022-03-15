import {  Fragment, useState } from "react";
import ExpenseItem from "../Components/ExpenseItem/ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  getDocs,
  doc
} from "firebase/firestore/lite";
import db from "../firebase";
import { useEffect } from "react";
import { expenseActions } from "../store/expenses";
import classes from "./Expenses.module.css";


const Expenses = () => {
  const dispatch = useDispatch();

  // const userName = useSelector((state) => state.user.userName);

  const [expenseList, setExpenseList] = useState([]);

  let tempArray = [];

  useEffect(() => {
    const collectionRef = collection(db, "expenses");

    getDocs(collectionRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          //   dispatch(expenseActions.addExpense(doc.data()));
          tempArray.push({
            cost: doc.data().cost,
            description: doc.data().description,
            id: doc.id,
          });
        });
        dispatch(expenseActions.setId(doc.id));
        setExpenseList(tempArray);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const expenses = Array.from({ ...expenseList });
  dispatch(expenseActions.addExpense(expenseList));
  console.log(expenseList);

  return (
    <div className={classes.container}>
      Individual Expenses
      <div className={classes.content}>
      {expenseList &&
        expenseList.map((expense) => {
          dispatch(expenseActions.setId(expense.id));
          console.log(expense);
          return (
            
            <Fragment>
              <ExpenseItem key={expense.id} description = {expense.description} cost = {expense.cost}></ExpenseItem>

            </Fragment>
              // <UpdateExpense id={expense.id} />
              // <DeleteExpense id={expense.id}>Delete</DeleteExpense>
           
          )
          })}
      </div>
      
    </div>
  );
};

export default Expenses;
