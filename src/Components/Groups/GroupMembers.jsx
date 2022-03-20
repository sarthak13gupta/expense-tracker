import { useEffect, useState , Fragment } from "react";
import { collection , doc , getDocs } from "firebase/firestore/lite";
import db, { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import classes from "./GroupMembers.module.css"
import MemberItem from "./MemberItem";

const GroupMembers = (props) => {

    const [user] = useAuthState(auth);

    const [memberList , setMemberList] = useState([]);


    let tempArray = [];
    useEffect(() => {
        const collectionRef = collection(db, "group members " + `${props.id}`);
    
        getDocs(collectionRef)
          .then((snapshot) => {
            snapshot.docs.map((doc) => {
              if(doc.data().uid === user.uid){
                tempArray.push({
                  amount: doc.data().amount,
                  description: doc.data().description,
                  email: doc.data().email,
                  id: doc.id,
                });
              }
              //   dispatch(expenseActions.addExpense(doc.data()));
              
            });
            // dispatch(expenseActions.setId(doc.id));
            setMemberList(tempArray);
          })
          .catch((err) => console.log(err.message));
      }, [user]);

    //   console.log(memberList);


      return (
        <div className={classes.container}>
          <h2>Members</h2>
          <div className={classes.content}>
          {memberList &&
            memberList.map((member , key) => {
                key = member.id;
            //   dispatch(expenseActions.setId(member.id));
              // console.log(member);
              return (
                
                <Fragment>
                  <MemberItem  id = {member.id} description = {member.description} amount = {member.amount} email={member.email}></MemberItem>
    
                </Fragment>
                  // <UpdateExpense id={member.id} />
                  // <DeleteExpense id={member.id}>Delete</DeleteExpense>
               
              )
              })}
          </div>
          
        </div>
      );

};


export default GroupMembers;