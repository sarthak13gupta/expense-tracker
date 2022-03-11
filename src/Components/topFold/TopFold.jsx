import { useRef, useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import classes from "./TopFold.module.css";

const TopFold = () => {
    const [addExpense , setAddExpense] = useState();
    const queryRef = useRef();

    const searchHandler = () => {
        // const query = queryRef.current.value;
        // console.log(query);

        setAddExpense(true);
    };


    return (
        <Card>
            <div className={classes.topFold}>
                <i></i>
                <div className={classes.space}>
                    <input type="text" placeholder="search for expenses" ref={queryRef} />
                    <button onClick={searchHandler}>Add</button>
                </div>
            </div>
            {addExpense &&<NewExpense/>}
        </Card>
    )

};


export default TopFold;