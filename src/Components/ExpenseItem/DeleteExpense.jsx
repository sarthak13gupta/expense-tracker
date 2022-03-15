import { doc , deleteDoc } from "firebase/firestore/lite";
import db from "../../firebase";
import {AiFillDelete} from "react-icons/ai"
import classes from "./ExpenseItem.module.css";
import { useSelector } from "react-redux";

const DeleteExpense = () => {
  
  const id = useSelector(state => state.expense.id);

    const expenseDeleteHandler = async () => {

      

        const expenseDocRef = doc(db, 'expenses', id)
        try{
          await deleteDoc(expenseDocRef)
        } catch (err) {
          alert(err)
        }

        alert("deleted");
    
      };


    return(
      
      <AiFillDelete onClick={expenseDeleteHandler} className={classes.icon}/>
        
    )
};

export default DeleteExpense;