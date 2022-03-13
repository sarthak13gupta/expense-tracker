import { createSlice } from "@reduxjs/toolkit";
import { doc, deleteDoc } from "firebase/firestore/lite";
import db from "../firebase";

const initialExpenseState = {
  expenseList: [],
  showForm: false,
  id: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState: initialExpenseState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    addGroupFormToggle(state) {
      state.showForm = !state.showForm;
    },

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


export default groupSlice.reducer;

export const groupActions = groupSlice.actions;