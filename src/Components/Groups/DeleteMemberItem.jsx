import { doc , deleteDoc } from "firebase/firestore/lite";
import db from "../../firebase";
import {AiFillDelete} from "react-icons/ai"
import classes from "./MemberItem.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DeleteMemberItem = (props) => {

    const {id} = useParams();
  
//   const id = useSelector(state => state.expense.id);

    const expenseDeleteHandler = async () => {

      

        const memberDocRef = doc(db, 'group members ' + `${id}` , props.id);
        try{
          await deleteDoc(memberDocRef)
        } catch (err) {
          alert(err)
        }

        alert("deleted");
    
      };


    return(
      
      <AiFillDelete onClick={expenseDeleteHandler} className={classes.icon}/>
        
    )
};

export default DeleteMemberItem;