import { Fragment, useState } from "react";
import Header from "../Components/Header";
import Expenses from "./Expenses";
import TopFold from "../Components/topFold/TopFold";
import Group from "../Components/Groups/Group";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import Modal from "../Components/UI/Modal/Modal";



const Home = (props) => {



    return(
        <Fragment>
            <Header></Header>
            <Modal />
            <TopFold/>
            <Expenses/>
            <Group/>
        </Fragment>
    )
}


export default Home;