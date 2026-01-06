import React, { useState } from 'react'
import { useFirebase } from "./constext/firebase";
// import './App.css'

const App = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  console.log("firebase",firebase);

  // put data
  const putDataNew = () => {
    firebase.putData("grandfather/father/child",{id: 1,name: 'avinash', age: 21 });
  };
  
  return (
    <div className='App'>
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />

      <input
       onChange={(e) => setPassword(e.target.value)}
       value={password}
       type="password"
        placeholder="Enter password"
      />
      <button onClick={() => {
        firebase.signupUserWithEmailAndPassword(email, password);
        firebase.putData("user/" + "Avinashsingh", { email, password})
        }}
        >
          SignUp</button>
          <button onClick={putDataNew}>Trigger</button>
    </div>
  )
}

export default App

