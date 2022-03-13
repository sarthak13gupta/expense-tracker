import { useEffect , useState } from "react";
import { collection , query , orderBy , getDocs } from "firebase/firestore/lite";
import{  onSnapshot} from "firebase/firestore"
import db from "../../firebase";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expenses";

const ExpenseList = () => {

    const dispatch = useDispatch();

    let expenseList = [];
    useEffect(()=>{
       const collectionRef = collection(db , "expenses");

        getDocs(collectionRef).then((snapshot) => {
        snapshot.docs.map((doc) => {
            dispatch(expenseActions.addExpense(doc.data()))
            // expenseList.push({...doc.data() , id: doc.id});
        });
    })
    },[db]);



    return (
        <ExpenseItem/>
    )
};
// export default ExpenseList; 