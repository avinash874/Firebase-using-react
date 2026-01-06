import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from "../firebase";

import "../App.css";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value => 
            alert('success'))
    );
    };

    const signupWithgoogle = () => {
        signInWithPopup(auth,googleProvider);
    }

    return (
        <div className='signup-page'>
            <h1>Signup Page</h1>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email here' />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password' />
            <br />
            <button onClick={(signupWithgoogle)}>Sigin with google</button>
            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default Signup;
