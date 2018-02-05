
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDPfbH2wnJWOV28mY2l-Lnk6bVF8DOfn9M",
    authDomain: "todo-d045a.firebaseapp.com",
    databaseURL: "https://todo-d045a.firebaseio.com",
    projectId: "todo-d045a",
    storageBucket: "",
    messagingSenderId: "3250814420"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;