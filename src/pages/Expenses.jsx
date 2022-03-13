import { Fragment, useState } from "react";
import ExpenseItem from "../Components/ExpenseItem/ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../firebase";
import { useEffect } from "react";
import { expenseActions } from "../store/expenses";
import { userActions } from "../store/user";
import Card from "../Components/UI/Card";
import UpdateExpense from "../Components/ExpenseItem/UpdateExpense";
import DeleteExpense from "../Components/ExpenseItem/DeleteExpense";

const Expenses = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.userName);

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

        setExpenseList(tempArray);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const expenses = Array.from({ ...expenseList });
  dispatch(expenseActions.addExpense(expenseList));
  console.log(expenseList);

  return (
    <Fragment>
      Individual Expenses
      {expenseList &&
        expenseList.map((expense) => {
          dispatch(expenseActions.setId(expense.id));
          console.log(expense);
          return (
            <Card key={expense.id}>
              <p>{expense.description}</p>
              <UpdateExpense id={expense.id} />
              <DeleteExpense id={expense.id}>Delete</DeleteExpense>
            </Card>
          );
        })}
    </Fragment>
  );
};

export default Expenses;
