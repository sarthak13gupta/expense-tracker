import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import expenseReducer from "./expenses.jsx";
import userReducer from "./user";
import groupReducer from "./group";
import uiReducer from "./ui";


const store = configureStore({
    reducer:{expense: expenseReducer , user:userReducer  , group: groupReducer , ui:uiReducer},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})




export default store;