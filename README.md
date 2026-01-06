# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


* git add .
* git commit -m ""
* git push origin main

# 10 How to Setup a Firebase Realtime Database with Reactjs 

* firebase real-time database and how we can use the firebase real-time database in our Reactjs Application.

* Firebase Realtime Database is a cloud-hosted NoSQL database by Firebase that stores data as a single JSON tree and syncs in real time to all connected clients.

🧠 What makes Realtime Database different?

* JSON tree structure (not collections/documents)
* Instant real-time updates
* Offline support
* Very fast for live apps (chat, presence, counters)

import { ref, get } from "firebase/database";

<!-- READ / GET DATA -->
# Read once
const snapshot = await get(ref(database, "users"));
if (snapshot.exists()) {
  console.log(snapshot.val());
}

<!-- # Read in real time (listener) -->

* // 
import { ref, onValue } from "firebase/database";

const usersRef = ref(database, "users");
const unsubscribe = onValue(usersRef, (snapshot) => {
  console.log(snapshot.val());
});

// stop listening
// unsubscribe();


