<<<<<<< HEAD
import { getAuth,onAuthStateChanged } from "firebase/auth"
import { app } from "./firebase";

import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //Yes, you are logged in
      if(user){
        setUser(user);
      }else{
        // User is signed out
        console.log("You are logged out");
        setUser(null);
        
      }
  });
},[]);

  if(user === null){
  return (
    <div className="App">
      <Signup />
      <Signin />
    </div>
  );
}
return(
  <div className="App">
    <h1>Hello {user.email}</h1>
    <button onClick={() => signOut(auth)}>Logout</button>
  </div>
)
};

export default App;
=======
import React, { useState } from 'react'
import { useFirebase } from "./constext/firebase";
import './App.css'

const App = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  console.log("firebase",firebase);
  
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
    </div>
  )
}

export default App
>>>>>>> 7eed745 (Added firebase)
