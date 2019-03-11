import firebase from "firebase/app"; //only importing the app cause that is all what we need
import "firebase/firestore"; //The actual database
import "firebase/auth"; //this is for authentication

var config = {
  apiKey: "AIzaSyAXmvVYGR2BQl42zpkjmiJcl0JcE_PQxzE",
  authDomain: "csc301-boundless-2d996.firebaseapp.com",
  databaseURL: "https://csc301-boundless-2d996.firebaseio.com",
  projectId: "csc301-boundless-2d996",
  storageBucket: "csc301-boundless-2d996.appspot.com",
  messagingSenderId: "758164563895"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
