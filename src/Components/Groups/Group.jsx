import TopFold from "../topFold/TopFold";
import { Fragment } from "react";
import TopFoldGroup from "./topFoldGroup";
import { getDocs, collection, doc } from "firebase/firestore/lite";
import { useEffect } from "react";
import { groupActions } from "../../store/group";
import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "./Group.module.css";
import db, { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import GroupItem from "./GroupItem/GroupItem";

const Group = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  // const userName = useSelector((state) => state.user.userName);

  const [groupList, setGroupList] = useState([]);

  let tempArray = [];

  useEffect(() => {
    const collectionRef = collection(db, "group");

    getDocs(collectionRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          //   dispatch(groupActions.addExpense(doc.data()));
          if (doc.data().uid === user.uid) {
            tempArray.push({
              members: doc.data().members,
              description: doc.data().description,
              id: doc.id,
            });
          }
        });
        dispatch(groupActions.setId(doc.id));
        setGroupList(tempArray);
      })
      .catch((err) => console.log(err.message));
  }, [user]);

  // const expenses = Array.from({ ...groupList });
  // dispatch(groupActions.addExpense(groupList));
  console.log(groupList);

  return (
    <div>
      <h2>Groups</h2>
      
      <TopFoldGroup />
      <div className={classes.container}>
        <div className={classes.content}>
          {groupList &&
            groupList.map((group , key) => {
              dispatch(groupActions.setId(group.id));
              // console.log(group);
              return (
                <Fragment>
                  <GroupItem
                    id={group.id}
                    description={group.description}
                    members={group.members}
                  ></GroupItem>
                </Fragment>
                // <UpdateExpense id={expense.id} />
                // <DeleteExpense id={expense.id}>Delete</DeleteExpense>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Group;
