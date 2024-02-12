import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb2xe4ZnfwUNPVpcNBXGE_14-uRkuDFyQ",
  authDomain: "react-chat-app-150d4.firebaseapp.com",
  databaseURL: "https://react-chat-app-150d4-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-150d4",
  storageBucket: "react-chat-app-150d4.appspot.com",
  messagingSenderId: "1062406125743",
  appId: "1:1062406125743:web:32e49ce58d4de08eedbc5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
