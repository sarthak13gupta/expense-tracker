import { Fragment } from "react";
import Header from "../Components/Header";
import Expenses from "./Expenses";
import TopFold from "../Components/topFold/TopFold";
import Group from "../Components/Groups/Group";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
const Home = (props) => {
    return(
        <Fragment>
            <Header></Header>
            <TopFold/>
            <Expenses/>
            <Group/>
        </Fragment>
    )
}


export default Home;