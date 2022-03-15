import { createSlice } from "@reduxjs/toolkit";
import { doc, deleteDoc , collection , addDoc ,Timestamp  } from "firebase/firestore/lite";
import db from "../firebase";

const initialExpenseState = {
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

    // addExpenseFormToggle(state) {
    //   state.showForm = !state.showForm;
    // },
    updateExpenseFormToggle(state) {
      state.updateForm = !state.updateForm;
    },

    addDescription(state , action){
      state.enteredDescription = action.payload;
    },

    addCost(state , action){
      state.enteredCost = action.payload;
    },

    // addExpense(state , actions){
    // //   try {
    // //     const collectionRef = collection(db , "expenses");
    // //      addDoc(collectionRef , {
    // //         description: state.enteredDescription,
    // //         cost: state.enteredCost,
    // //         created: Timestamp.now(),
    // //     })
    // // }catch(err){
    // //     alert(err.message);
    // // }
    // },

    deleteExpense(state) {
      const expenseDocRef = doc(db, "expenses", state.id);

      try {
        deleteDoc(expenseDocRef);
      } catch (err) {
        alert(err);
      }
    },
  },
});

export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
