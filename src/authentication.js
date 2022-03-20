import db from "./firebase"
import { auth } from "./firebase";

import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth"

import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore"

import { async } from "@firebase/util";
import { setSignOutState } from "./store/user";
import { useDispatch } from "react-redux";




const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {

    try {
        const res = await signInWithPopup(auth, googleProvider);
        // const user = res.user;
        // const q = query(collection(db, "users"), where("uid", "==", user.uid));
        // const docs = await getDocs(q);
        // if (docs.docs.length === 0) {
        //     await addDoc(collection(db, "users"), {
        //         uid: user.uid,
        //         name: user.displayName,
        //         authProvider: "google",
        //         email: user.email,
        //         photo: user.photoURL,
        //     });
        // }
    } catch (err) {
        alert(err.message);
    }
};



const logInWithEmailAndPassword = async(email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        alert(err.message);
    }
};


const registerWithEmailAndPassword = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // try {
        //     await addDoc(collection(db, "users"), {
        //         // uid: user.uid,
        //         name: name,
        //         authProvider: "email and Password",
        //         email: email,
        //         // photo: user.photoURL,
        //     });
        // } catch (err) {
        //     alert(err.message);
        // }
        // console.log(name, email, password);



        // const user = res.user;
        // const q = query(collection(db, "users"), where("uid", "==", user.uid));
        // const docs = await getDocs(q);
        // console.log(docs);
        // if (docs.docs.length === 0) {
        //     // await addDoc(collection(db, "users"), {
        //     //     uid: user.uid,
        //     //     name: name,
        //     //     authProvider: "email and Password",
        //     //     email: user.email,
        //     //     // photo: user.photoURL,
        //     // });
        // }
    } catch (err) {
        alert(err.message);
    }


};


const sendPasswordReset = async(email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("password reset link send!!");
    } catch (err) {
        alert(err.message);
    }
}

const logOut = () => {
    signOut(auth);
}


export {
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logOut,
};