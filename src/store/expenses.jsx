import {createSlice} from "@reduxjs/toolkit";
import { doc , deleteDoc } from "firebase/firestore/lite";
import db from "../firebase";

const initialExpenseState = {
    expenseList: [],
    showForm: false,
    updateExpenseFormToggle: false,
    id: null,
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialExpenseState,
    reducers:{
        addExpense(state , action){
            // console.log(action.payload);
            state.expenseList = state.expenseList.concat(action.payload);
            // console.log(state.expenseList);
        },

        setId(state , action) {
            state.id = action.payload;
        },

        addExpenseFormToggle(state) {
            state.showForm = !state.showForm;
        },
        updateExpenseFormToggle(state){
            state.updateForm = !state.updateForm;
        },

        deleteExpense(state){

        const expenseDocRef = doc(db, 'expenses', state.id);

        try{
           deleteDoc(expenseDocRef)
        } catch (err) {
          alert(err)
        }
    
      

        }

    }
});


export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
