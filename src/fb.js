import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC-lGtjMKZEg8vm580Aeim_Ds77c3Vx0Hc",
    authDomain: "todo-ninja-b5439.firebaseapp.com",
    databaseURL: "https://todo-ninja-b5439.firebaseio.com",
    projectId: "todo-ninja-b5439",
    storageBucket: "todo-ninja-b5439.appspot.com",
    messagingSenderId: "977457699448"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true })

  export default db;