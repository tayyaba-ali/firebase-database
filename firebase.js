import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {where,limit,query,orderBy,serverTimestamp,onSnapshot ,getDoc , getDocs ,updateDoc,arrayUnion, arrayRemove  ,getFirestore,setDoc ,doc,collection, addDoc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCBts_Wh6PlKQ0SKdTR49w6jTep3QQzv1Q",
  authDomain: "database-eb8ea.firebaseapp.com",
  projectId: "database-eb8ea",
  storageBucket: "database-eb8ea.firebasestorage.app",
  messagingSenderId: "208240676385",
  appId: "1:208240676385:web:3d1904176c9d053139dd60"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export{
  setDoc,
    collection, addDoc,db
    ,doc
    ,getDocs ,
    limit,
    updateDoc ,
    arrayUnion, arrayRemove ,serverTimestamp ,getDoc ,
    onSnapshot,
    query,orderBy,
    where
 
}