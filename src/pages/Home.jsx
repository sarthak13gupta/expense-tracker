import { Fragment, useState } from "react";
import Header from "../Components/Header";
import Expenses from "./Expenses";
import TopFold from "../Components/topFold/TopFold";
import Group from "../Components/Groups/Group";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import Modal from "../Components/UI/Modal/Modal";
import UpdateExpenseModal from "../Components/ExpenseItem/UpdateExpenseModal";
import GroupModal from "../Components/UI/Modal/GroupModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {  useNavigate } from "react-router-dom";



const Home = (props) => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if(!user)
    {
        navigate("/");
    }



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