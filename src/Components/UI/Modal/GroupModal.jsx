import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui";
import { expenseActions } from "../../../store/expenses";
import { collection, doc, addDoc, Timestamp } from "firebase/firestore/lite";
import db from "../../../firebase";


const backdrop = {
  visisble: { opacity: 0 },
  hidden: { opacity: 0 },
};

const GroupModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showGroupModal);

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
  let memberInputRef = useRef();

  const addGroupHandler = async (event) => {
    event.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;
    const enteredMembers = memberInputRef.current.value;

    if (enteredMembers && enteredDescription) {
      dispatch(expenseActions.addDescription(enteredDescription));
      dispatch(expenseActions.addCost(enteredMembers));
      dispatch(uiActions.setGroupShowModal());

      try {
        const collectionRef = collection(db, "group");
        addDoc(collectionRef, {
          description: enteredDescription,
          members: enteredMembers,
          created: Timestamp.now(),
        });
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("please completely add an expense");
    }
    console.log(enteredMembers, enteredDescription);
    descriptionInputRef = "";
    memberInputRef = "";
  };

  const removeGroupModalHandler = () => {
    dispatch(uiActions.setGroupShowModal());
  };

  
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
            <div>
              <h1>Add new Group</h1>
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
                  <label htmlFor="cost">Members</label>
                  <input
                    type="text"
                    id="description"
                    ref={memberInputRef}
                    // required
                  />
                </div>
                <div className={classes.actions}>
                  <button onClick={addGroupHandler}>AddGroup</button>
                  <button onClick={removeGroupModalHandler}>Cancel</button>
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

export default GroupModal;
