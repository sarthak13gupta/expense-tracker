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

    

    const [user] = useAuthState(auth);
    const {id} = useParams();


    const [photo , setPhoto] = useState(null);
    const [loading , setLoading] = useState();
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/GroupPhoto_avatar_placeholder_large.png");


    const fileChangeHandler = (e) => {
        const image = e.target.files[0];
        if(image){
            setPhoto(image);
            console.log(photo);
            
        }
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
        
            <div>
                <input type="file" onChange={fileChangeHandler}/>
                <button disabled={loading || !photo} onClick={onClickHandler}>Upload</button>
                <img className={classes.avatar} src={photoURL} alt="avatar" />

            </div>
        
    )
};


export default GroupPhoto;