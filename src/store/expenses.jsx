import {createSlice} from "@reduxjs/toolkit";

const initialExpenseState = {
    expenseList: [],
}

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialExpenseState,
    reducers:{

    }
});


export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
