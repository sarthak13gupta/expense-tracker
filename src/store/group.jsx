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
    
  },
});


export default groupSlice.reducer;

export const groupActions = groupSlice.actions;