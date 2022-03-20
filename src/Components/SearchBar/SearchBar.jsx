import React, { useEffect, useState, Fragment } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useRef } from "react";
import {
  doc,
  updateDoc,
  getDocs,
  addDoc,
  collection,
  query,
  where,
} from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

import db, { auth } from "../../firebase";
import user from "../../store/user";
import { useAuthState } from "react-firebase-hooks/auth";
import { Card } from "@material-ui/core";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  // const [values , setValues] = useState(false);

  const descRef = useRef();
  const amountRef = useRef();

  const [user] = useAuthState(auth);

  const { id } = useParams();

  const memberEmailRef = useRef();

  // let tempArray = [];

  // useEffect(async () => {

  //   const doc2Ref = doc(db, "group", `${id}`);

  //   getDoc(doc2Ref)
  //     .then((doc) => {
  //       if (doc.exists) {
  //         tempArray = doc.data().memberArray;
  //       } else {
  //         console.log("no such doc in firebase");
  //       }
  //     })
  //     .catch((err) => alert(err.message));

  //     console.log(tempArray);

  //     const doc1Ref = doc(db, "group", id);

  //   try {
  //     await updateDoc(doc1Ref, {
  //       memberArray: tempArray.concat(memberList),
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // },[memberList]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.email.includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const addMemberHandler = async (e) => {
    e.preventDefault();
    setShow(true);
    // const email = e.target.innerText;
    // setMemberList((arr) => [...arr, email]);
    const tempEmail = e.target.innerText;
    console.log(tempEmail);
    setEmail(tempEmail);
  };

  const setValues = async () => {
    const desc = descRef.current.value;
    const amount = amountRef.current.value;

    if (desc && amount) {
      try {
        const collectionRef = collection(db, "group members " + `${id}`);
        // memberList.map((val) => {
        const q = query(
          collection(db, "group members " + `${id}`),
          where("email", "==", email)
        );
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collectionRef, {
            email: email,
            description: desc,
            amount: amount,
            uid: user.uid,
          });
        }
      } catch (err) {
        // alert(err.message);
      }

      setShow(false);
    }
  };

  return (
    <Fragment>
      {!show && (
        <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                key = value.id;
                //   console.log(filteredData);
                return (
                  //   <a className="dataItem" href={value.link} target="_blank">
                  <div>
                    <a onClick={addMemberHandler} className="dataItem">
                      <p>{value.email}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      {show && (
        <div className="form">
          <h3>{email}</h3>
          <div className="control">
            <label htmlFor="decription">Describe</label>
            <input type="text" placeholder="give/take" ref={descRef} />
          </div>
          <div className="control">
            <label htmlFor="amount">amount</label>
            <input type="number" ref={amountRef} />
          </div>
          <div className="actions">
            <button onClick={setValues}>enter</button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default SearchBar;
