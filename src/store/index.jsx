import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import expenseReducer from "./expenses.jsx";
import userReducer from "./user"
import groupReducer from "./group"


const store = configureStore({
    reducer:{expense: expenseReducer , user:userReducer  , group: groupReducer},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})




export default store;