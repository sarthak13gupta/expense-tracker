import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expenses";
import NewExpense from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import classes from "./TopFold.module.css";

const TopFold = () => {
    
    const queryRef = useRef();

    const dispatch = useDispatch();
    let showForm = false;
    showForm = useSelector(state => state.expense.showForm)
    const formShowHandler = () => {

        dispatch(expenseActions.addExpenseFormToggle())
    }


    return (
        <Card>
            <div className={classes.topFold}>
                <i></i>
                <div className={classes.space}>
                    <input type="text" placeholder="search for expenses" ref={queryRef} />
                    <button onClick={formShowHandler}>Add</button>
                </div>
            </div>
            {showForm &&<NewExpense/>}
        </Card>
    )

};


export default TopFold;