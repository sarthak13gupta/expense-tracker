import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upload, uploadGroupPhoto } from "../../../storage";
// import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails } from "../../store/user";
import Header from "../../Header";
import classes from "./GroupPhoto.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { useParams } from "react-router-dom";
import { collection , getDocs } from "firebase/firestore/lite";
import db from "../../../firebase";

const GroupPhoto = () => {

  const [show , setShow]  = useState(false);


    

    const [user] = useAuthState(auth);
    const {id} = useParams();


    const [photo , setPhoto] = useState(null);
    const [loading , setLoading] = useState();
    const [photoURL, setPhotoURL] = useState("/images/defaultProfilePicture.png");



    const fileChangeHandler = (e) => {
        const image = e.target.files[0];
        if(image){
            setPhoto(image);
            console.log(photo);
            
        }
    }

    const imageSetHandler = () => {
      setShow(true);
  }

    const onClickHandler = (e) => {
        e.preventDefault();
        // console.log(photo);
        // console.log(user);
        uploadGroupPhoto(photo , user , setLoading , id);

    }

    useEffect(() => {
        const collectionRef = collection(db, "group");
    
        getDocs(collectionRef)
          .then((snapshot) => {
            snapshot.docs.map((doc) => {
              if (doc.data().uid === user.uid && doc.id === id) {
                setPhotoURL(doc.data().Img);
              }
            });
          })
          .catch((err) => console.log(err.message));
      }, [user]);

      
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
      </div>
        
    )
};


export default GroupPhoto;