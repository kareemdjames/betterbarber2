import firebase from 'firebase'
require ('dotenv').config()


const config = {

  apiKey: process.env.API_KEY,
  authDomain: "betterbarber2.firebaseapp.com",
  databaseURL: "https://betterbarber2.firebaseio.com",
  projectId: "betterbarber2",
  storageBucket: "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID

};

firebase.initializeApp(config);

export default firebase

export const Database = firebase.database()