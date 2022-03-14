import React, { useEffect , useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui";
import { expenseActions } from "../../../store/expenses";

const backdrop = {
  visisble: { opacity: 0 },
  hidden: { opacity: 0 },
};

const Modal = () => {


  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);

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


  

  const addExpenseHandler = async (event) => {

    event.preventDefault();


    const enteredDescription = descriptionInputRef.current.value;
    const enteredCost = costInputRef.current.value;

    if(enteredCost && enteredDescription){

        dispatch(expenseActions.addDescription(enteredDescription));
        dispatch(expenseActions.addCost(enteredCost));
        dispatch(uiActions.setShowModal());

    }
    
    else
    {
      alert("please completely add an expense");
    }
    console.log(enteredCost , enteredDescription);
    descriptionInputRef = "";
    costInputRef = "";
};

const removeModalHandler = () => {
    // uiActions.setShowModal();
    setTimeout(() => {
        dispatch(uiActions.setShowModal());
      }, 1000);
}

//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(uiActions.setShowModal());
//     }, 1000);
//   }, []);

  return (
    // <div className={classes.container}>
    <AnimatePresence exitBeforeEnter>
      {showModal && (
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
            {/* <p>askdfbaf</p>
            <Link to="/">
              <button >
                sdhbfhsd
              </button> */}
            <div>
              <h1>Add new Expense</h1>
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
                  <button onClick={addExpenseHandler}>AddExpense</button>
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

export default Modal;
