import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenses.jsx";


const store = configureStore({
    reducer:{expense: expenseReducer}
})


export default store;