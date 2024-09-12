// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfJyJNN6jpz12YncdXXZXxGTsJATaOFzo",
    authDomain: "react-native-login-44be9.firebaseapp.com",
    projectId: "react-native-login-44be9",
    storageBucket: "react-native-login-44be9.appspot.com",
    messagingSenderId: "870194704640",
    appId: "1:870194704640:web:5539f87b7b4d97a54d43e5",
    measurementId: "G-ZN9JEDKK6N"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };