import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCY8i6YEUhBoKgAskxOzGGO9Ozuwmv6iJo",
    authDomain: "coderhouse-reactjs-e851a.firebaseapp.com",
    projectId: "coderhouse-reactjs-e851a",
    storageBucket: "coderhouse-reactjs-e851a.appspot.com",
    messagingSenderId: "1077082884942",
    appId: "1:1077082884942:web:4838225319e0816265ec1f",
    measurementId: "G-6P3LEDH1N3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app