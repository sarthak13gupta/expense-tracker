import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./UpdateExpenseModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import { expenseActions } from "../../store/expenses";
import {  doc , updateDoc } from "firebase/firestore/lite";
import db from "../../firebase";


const backdrop = {
  visisble: { opacity: 0 },
  hidden: { opacity: 0 },
};

const UpdateExpenseModal = () => {
  const dispatch = useDispatch();
  const showUpdateModal = useSelector((state) => state.ui.showUpdateModal);

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "200px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  let descriptionInputRef = useRef();
  let costInputRef = useRef();
  const id = useSelector(state => state.expense.id);

  const updateExpenseHandler = async (event) => {
    event.preventDefault();

    const updatedDescription = descriptionInputRef.current.value;
    const updatedCost = costInputRef.current.value;

    if (updatedCost && updatedDescription) {
      dispatch(expenseActions.addDescription(updatedDescription));
      dispatch(expenseActions.addCost(updatedCost));
      dispatch(uiActions.setUpdateModal());
        
        
      const docRef = doc(db, "expenses", id);

    try {
      await updateDoc(docRef, {
        cost: updatedCost,
        description: updatedDescription,
      });
    } catch (err) {
      alert(err);
    }
    } else {
      alert("please completely add an expense");
    }
    console.log(updatedCost, updatedDescription);
    descriptionInputRef = "";
    costInputRef = "";
  };

  const removeModalHandler = () => {
    dispatch(uiActions.setUpdateModal());
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       dispatch(uiActions.setShowModal());
  //     }, 1000);
  //   }, []);

  return (
    // <div className={classes.container}>
    <AnimatePresence exitBeforeEnter>
      {showUpdateModal && (
        <motion.div
          className={classes.backdrop}
          variants={backdrop}
          intial="hidden"
          animate="visible"
          //   exit="hidden"
        >
          <motion.div
            className={classes.modal}
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h1>Update Expense</h1>
              <form className={classes.form}>
                <div className={classes.control}>
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    ref={descriptionInputRef}
                    // required
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="cost">Cost</label>
                  <input
                    type="text"
                    id="description"
                    ref={costInputRef}
                    // required
                  />
                </div>
                <div className={classes.actions}>
                  <button onClick={updateExpenseHandler}>UpdateExpense</button>
                  <button onClick={removeModalHandler}>Cancel</button>
                </div>
              </form>
            </div>
            {/* </Link> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    // </div>
  );
};

export default UpdateExpenseModal;
