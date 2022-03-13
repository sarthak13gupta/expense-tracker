import { doc , deleteDoc } from "firebase/firestore/lite";
import db from "../../firebase";

const DeleteExpense = (props) => {

    const expenseDeleteHandler = async () => {

        const expenseDocRef = doc(db, 'expenses', props.id)
        try{
          await deleteDoc(expenseDocRef)
        } catch (err) {
          alert(err)
        }
    
      };


    return(
        <button onClick={expenseDeleteHandler}>Delete</button>
    )
};

export default DeleteExpense