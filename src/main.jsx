import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6ufB075IYrA5wqmAOzARWBeV6mjQFK8",
  authDomain: "andraca-react-50105.firebaseapp.com",
  projectId: "andraca-react-50105",
  storageBucket: "andraca-react-50105.appspot.com",
  messagingSenderId: "530625011360",
  appId: "1:530625011360:web:3b4d9fa3c8caf485edf3c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
