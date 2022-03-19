import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upload } from "../../storage";
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails } from "../../store/user";
import Header from "../Header";

import classes from "./Profile.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


const Profile = () => {

    const userPhoto = useSelector(selectUserPhoto);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const [user] = useAuthState(auth);

    // const dispatch = useDispatch();

    const [photo , setPhoto] = useState(null);
    const [loading , setLoading] = useState();
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

    console.log(userName , userEmail);

    const fileChangeHandler = (e) => {
        const image = e.target.files[0];
        if(image){
            setPhoto(image);
            console.log(photo);
            // dispatch(setUserLoginDetails({
            //     photo:e.target.files[0],
            // }))
        }
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(photo);
        console.log(user);
        upload(photo , user , setLoading);

    }

    useEffect(() => {
        if(user?.photoURL){
            setPhotoURL(user.photoURL);
        }
    })

    return (
        <div>
            <Header></Header>
            <div>
                <input type="file" onChange={fileChangeHandler}/>
                <button disabled={loading || !photo} onClick={onClickHandler}>Upload</button>
                <img className={classes.avatar} src={photoURL} alt="avatar" />

            </div>
            
            <p>{userName}</p>
            <p>{userEmail}</p>
        </div>
    )
};


export default Profile;