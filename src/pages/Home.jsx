import { Fragment, useState } from "react";
import Header from "../Components/Header";
import Expenses from "./Expenses";
import TopFold from "../Components/topFold/TopFold";
import Group from "../Components/Groups/Group";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import Modal from "../Components/UI/Modal/Modal";
import UpdateExpenseModal from "../Components/ExpenseItem/UpdateExpenseModal";
import GroupModal from "../Components/UI/Modal/GroupModal";



const Home = (props) => {



    return(
        <Fragment>
            {/* <Header></Header> */}
            <Modal />
            <GroupModal/>
            <UpdateExpenseModal/>
            <TopFold/>
            <Expenses/>
            <Group/>
        </Fragment>
    )
}


export default Home;