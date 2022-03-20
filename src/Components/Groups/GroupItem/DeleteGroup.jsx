import { doc , deleteDoc , query , collection , where , getDocs } from "firebase/firestore/lite";
import db, { auth } from "../../../firebase";
import {AiFillDelete} from "react-icons/ai"
import classes from "../MemberItem.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const DeleteGroup = (props) => {

    const [user] = useAuthState(auth);

    // const {id} = useParams();
  
//   const id = useSelector(state => state.expense.id);

    const expenseDeleteHandler = async () => {

        const groupDocRef = doc(db, 'group', props.id);
        try{
          await deleteDoc(groupDocRef)
        } catch (err) {
          alert(err)
        }

        alert("deleted");
    

      
        // const q = query(collection(db, "group members " + `${props.id}`));
        // const docs = await getDocs(q);
        // // const memberColRef = doc(db, 'group members ' + `${props.id}`);
        // try{
        //     docs.forEach((doc) => {
        //         deleteDoc(doc)

        //     })
         
        // } catch (err) {
        //   alert(err)
        // }

        // alert("deleted");
    
      };


    return(
      
      <AiFillDelete onClick={expenseDeleteHandler} className={classes.icon}/>
        
    )
};

export default DeleteGroup;