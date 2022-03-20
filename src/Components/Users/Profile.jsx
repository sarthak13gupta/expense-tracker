import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadUserPhoto } from "../../storage";
import { query , collection , where , getDocs } from "firebase/firestore/lite";
import db from "../../firebase";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../store/user";
import Header from "../Header";

import classes from "./Profile.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import Card from "../UI/Card";

const Profile = () => {
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const [totalAmount , setTotalAmount] = useState(0);
  const [show , setShow]  = useState(false);

  const [user] = useAuthState(auth);

  
  
  useEffect( async () =>  {
      let calcAmount = 0;
      if (user) {
      try {

        const q = query(collection(db, "expenses"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        docs.forEach((doc) => {
            console.log(doc.data());
            calcAmount = calcAmount + (+doc.data().cost);
            console.log(calcAmount);
        })

        setTotalAmount(calcAmount);

    } catch (err) {
        alert(err.message);
    }
    }
    // else navigate("/");
  },[user]);

//   console.log(totalAmount);

  // const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState();
  const [photoURL, setPhotoURL] = useState("/images/profilepicture.webp");

  console.log(userName, userEmail);

  const fileChangeHandler = (e) => {
    const image = e.target.files[0];
    if (image) {
      setPhoto(image);
      console.log(photo);
      // dispatch(setUserLoginDetails({
      //     photo:e.target.files[0],
      // }))
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(photo);
    console.log(user);
    uploadUserPhoto(photo, user, setLoading);
    setShow(false);
  };
  
  const imageSetHandler = () => {
      setShow(true);
  }

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.pic}>
        {show && (
          <div>
            <input type="file" onChange={fileChangeHandler} />
            <button disabled={loading || !photo} onClick={onClickHandler}>
              Upload
            </button>
          </div>
        )}
        <img className={classes.avatar} src={photoURL} onClick={imageSetHandler} alt="avatar" />
      </div>
      <Card>
        <p>{userName}</p>
        <p>{userEmail}</p>
        <h3>Total Amount spent recently</h3>
        <p>{totalAmount}</p>
      </Card>
    </div>
  );
};

export default Profile;
