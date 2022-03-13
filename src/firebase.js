// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAe9FGd8L2JLoR6wOa2XaEzD6YUZZiDEWw",
//     authDomain: "expensetracker-4658e.firebaseapp.com",
//     projectId: "expensetracker-4658e",
//     storageBucket: "expensetracker-4658e.appspot.com",
//     messagingSenderId: "931150929185",
//     appId: "1:931150929185:web:6ea272b9f8e3ec40597260"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCZDtlXqFqO0KC1MHVJJhUtAcrdjXc-U3Q",
    authDomain: "loststorage-26409.firebaseapp.com",
    projectId: "loststorage-26409",
    storageBucket: "loststorage-26409.appspot.com",
    messagingSenderId: "804049966871",
    appId: "1:804049966871:web:fc73eb6c6e4ec884420952"
};




// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);
const auth = getAuth();
const storage = getStorage(FirebaseApp);


export { auth, storage };
export default db;