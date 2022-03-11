import { useEffect , useState } from "react";
import { collection , query , orderBy , getDocs } from "firebase/firestore/lite";
import{  onSnapshot} from "firebase/firestore"
import db from "../../firebase";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = () => {

    const [expenseList , setExpenseList] = useState([]);

    useEffect(()=>{
       const collectionRef = collection(db , "expenses");
    //     const q = query(collection(db , "expenses") ,  orderBy('created' , 'desc'));
    //     console.log(q);
    //     // onSnapshot(q , (querySnap) => {
    //     // setExpenseList(querySnap.docs.map(doc => ({
    //     //     id: doc.id,
    //     //     data: doc.data(),
    //     // })))
    // // });

    getDocs(collectionRef).then((snapshot) => {
        snapshot.docs.map((doc) => {
            expenseList.push({...doc.data() , id: doc.id});
        });

    })
    console.log(expenseList);
    },[db]);


    return (

        // <div>expenseList</div>
        <ul>
            {expenseList.map((expense) => (
                <ExpenseItem  
                key = {expense.id}         
                description = {expense.description}
                cost = {expense.cost}              
            />
            ))}
        </ul>
    )
};
export default ExpenseList;