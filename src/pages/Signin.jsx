import React,{useState} from 'react'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

import "../App.css"

const Signin = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((value) => console.log("Signin success"))
        .catch((err) => console.log(err));
    }

  return (
    <div className='signin-page'>
      <h1>Signin Page</h1>
      <label>Enter your email</label>
      <input onChange={(e) =>setemail(e.target.value)} value={email} type="email" placeholder='Enter your email here' />
      <label>Enter your password</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter your password here' />
      <button onClick={createUser}>Signin me In</button>
    </div>
  )
}

export default Signin
