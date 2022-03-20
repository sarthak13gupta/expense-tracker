import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { doc , updateDoc } from "firebase/firestore/lite";
import db from "./firebase";


export const uploadUserPhoto = async (file , currentUser , setLoading) => {

    try{
        const fileRef = ref(storage , currentUser.uid + '.png')
        console.log(currentUser);
        setLoading(true);

    const snapShot = await uploadBytes(fileRef , file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser , {photoURL});

    setLoading(false);
    alert("Uploaded file!");
    }
    catch (err){
        console.log(err.message);
    }

}

export const uploadGroupPhoto = async (file , currentUser , setLoading , id) => {

    try{
        const fileRef = ref(storage ,id +  currentUser.uid + '.png')
        console.log(currentUser);
        setLoading(true);

    const snapShot = await uploadBytes(fileRef , file);
    const photoURL = await getDownloadURL(fileRef);

    console.log(photoURL);

    const docRef =  doc(db, "group", id);

    try {
      await updateDoc(docRef, {
        Img:photoURL,
      });
    } catch (err) {
      alert(err);
    }

    // updateProfile(currentUser , {photoURL});


    setLoading(false);
    alert("Uploaded file!");
    }
    catch (err){
        console.log(err.message);
    }

}