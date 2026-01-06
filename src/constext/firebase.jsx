import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import { set } from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyAcscfW_SLvgp9jUKwrqxLbPdAyPRcoyRI",
  authDomain: "fir-f153e.firebaseapp.com",
  projectId: "fir-f153e",
  storageBucket: "fir-f153e.firebasestorage.app",
  messagingSenderId: "361763405118",
  appId: "1:361763405118:web:a8b52cf1fa421e9629006f",
  databaseURL: "https://fir-f153e-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };
        const putData = (key, data) => set(ref(database, key), data);
    
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}