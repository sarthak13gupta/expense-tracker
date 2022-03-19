import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";


export const upload = async (file , currentUser , setLoading) => {

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