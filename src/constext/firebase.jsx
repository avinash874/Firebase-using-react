import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref ,set,get,child,onValue} from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
// import { database } from "./firebase";

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const [name, setName] = useState("");

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };
        const putData = (key, data) => set(ref(database, key), data);
    //  get data(data reding)
        // get(child(ref(database), 'grandfather/father/child')).then(snapshot => {
        //     console.log(snapshot.val());    
        // });

        // real-time listener
        
        useEffect(() => {
            onValue(ref(database, "grandfather/father/child"), (snapshot) => 
            setName(snapshot.val())
        );    
        },[])

    
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData,name}}>
            {/* <h3>name is {name} </h3> */}
            <h3>Name: {name?.name}</h3>
            {props.children}
        </FirebaseContext.Provider>
    )
}