import { initializeApp } from "firebase/app";

  const firebaseConfig = {
  apiKey: "AIzaSyCHIaz7PA2hLC1RuYsrF3JEK358WzSXi78",
  authDomain: "frontend-a75ca.firebaseapp.com",
  projectId: "frontend-a75ca",
  storageBucket: "frontend-a75ca.firebasestorage.app",
  messagingSenderId: "399545242636",
  appId: "1:399545242636:web:13f952aa15c6edce56ca29",
  databaseURL: "https://frontend-a75ca-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

