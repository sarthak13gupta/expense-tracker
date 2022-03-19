import TopFold from "../topFold/TopFold";
import { Fragment } from "react";
import TopFoldGroup from "./topFoldGroup"
import { getDocs , collection , doc } from "firebase/firestore/lite";
import { useEffect } from "react";
import { expenseActions } from "../../store/expenses";
import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Group.module.css";
import db from "../../firebase";

const Group = () => {

    const dispatch = useDispatch();

  // const userName = useSelector((state) => state.user.userName);

  const [expenseList, setExpenseList] = useState([]);

  let tempArray = [];

  useEffect(() => {
    const collectionRef = collection(db, "group");

    getDocs(collectionRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          //   dispatch(expenseActions.addExpense(doc.data()));
          tempArray.push({
            members: doc.data().members,
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
        <div>
            Groups
           <TopFoldGroup/>
        </div>
        
    )

};


export default Group;