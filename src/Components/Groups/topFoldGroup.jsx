import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupActions } from "../../store/group";
// import NewExpense from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import classes from "./topFoldGroups.module.css";

const TopFold = () => {
    
    const queryRef = useRef();

    const dispatch = useDispatch();
    let showForm = false;
    showForm = useSelector(state => state.group.showForm)


    const formShowHandler = () => {
        dispatch(groupActions.addGroupFormToggle())
    }


    return (
        <Card>
            <div className={classes.topFold}>
                <i></i>
                <div className={classes.space}>
                    <input type="text" placeholder="search for group" ref={queryRef} />
                    <button onClick={formShowHandler}>Add</button>
                </div>
            </div>
            {/* {showForm &&<NewExpense/>} */}
        </Card>
    )

};


export default TopFold;