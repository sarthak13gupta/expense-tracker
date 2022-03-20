import { createSlice } from "@reduxjs/toolkit";
import { doc, deleteDoc , collection , addDoc ,Timestamp  } from "firebase/firestore/lite";
import db from "../firebase";

const initialExpenseState = {
  totalAmount: 0,
  expenseList: [],
  showForm: false,
  updateExpenseFormToggle: false,
  id: null,
  enteredDescription :null,
  enteredCost : null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {

    addExpense(state, action) {
      // console.log(action.payload);
      state.expenseList = state.expenseList.concat(action.payload);
      // console.log(state.expenseList);
    },

    setId(state, action) {
      state.id = action.payload;
    },

    addDescription(state , action){
      state.enteredDescription = action.payload;
    },

    addCost(state , action){
      state.enteredCost = action.payload;
    },

    calcTotalAmount(state , action){
      state.totalAmount = state.totalAmount + action.payload;
    }
  },
});

export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
