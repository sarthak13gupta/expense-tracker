import { collection, getDoc, doc , getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import db, { auth } from "../firebase";
import GroupPhoto from "../Components/Groups/GroupItem/GroupPhoto";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useAuthState } from "react-firebase-hooks/auth";
import GroupMembers from "../Components/Groups/GroupMembers";
import {  useNavigate } from "react-router-dom";
import Card from "../Components/UI/Card";


const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [userList , setUserList] = useState();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();


  if(!user)
    {
        navigate("/");
    }


  let tempArray = [];


  useEffect(() => {
    const collectionRef = collection(db, "users");

    getDocs(collectionRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          //   dispatch(groupActions.addExpense(doc.data()));
          if (doc.data().uid !== user.uid) {
            tempArray.push({
              email: doc.data().email,
              id: doc.id,
            });
          }
        });
        // dispatch(groupActions.setId(doc.id));
        setUserList(tempArray);
      })
      .catch((err) => console.log(err.message));
  }, [user]);



  useEffect(() => {
    const colRef = collection(db, "group");
    const docRef = doc(db, "group", `${id}`);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          // console.log(doc.data());
          setDetailData(doc.data());
        } else {
          console.log("no such doc in firebase");
        }
      })
      .catch((err) => alert(err.message));
  }, [id]);

  return (
    <Container>
        <GroupPhoto/>
        <Card>
        <SearchBar placeholder={"enter a member name"}  data={userList} description = {id}/>
        </Card>
        <GroupMembers id = {id}/>
      
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;







export default Detail;
