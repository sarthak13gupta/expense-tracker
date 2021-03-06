import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import Card from "../UI/Card";
import classes from "./TopFold.module.css";

const TopFold = () => {
    
    const queryRef = useRef();

    const dispatch = useDispatch();
    let showForm = false;
    showForm = useSelector(state => state.expense.showForm)
    const formShowHandler = () => {

        dispatch(uiActions.setShowModal())
    }


    return (
        // <Card>
            <div className={classes.topFold}>
                <i></i>
                <div className={classes.space}>
                    {/* <input type="text" placeholder="search for expenses" ref={queryRef} /> */}
                    <div className={classes.actions}>
                    <button onClick={formShowHandler}>AddExpense</button>
                    </div>
                    
                </div>
            </div>
        //  </Card>
    )

};


export default TopFold;