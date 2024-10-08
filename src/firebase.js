import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBQ4bqOoarv94t802BalL4bO6Wc6Iq8PAA",
  authDomain: "netflix-clone-9ba4a.firebaseapp.com",
  projectId: "netflix-clone-9ba4a",
  storageBucket: "netflix-clone-9ba4a.appspot.com",
  messagingSenderId: "950534336243",
  appId: "1:950534336243:web:d99b1c77f0c0bd75e71186"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       })
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
}

const login = async (email,password)=>{
  try{
    signInWithEmailAndPassword(auth, email, password);
  }catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split("-").join(" "));
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout};