// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import auth from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOKxssmM0hEh-Wm3BAoJSDB0pEJSijs4A",
    authDomain: "genesis-147741.firebaseapp.com",
    projectId: "genesis-147741",
    storageBucket: "genesis-147741.appspot.com",
    messagingSenderId: "137888585936",
    appId: "1:137888585936:web:ffe7ebdcfa5187b2ede6d5",
    measurementId: "G-9CT30VKLHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;