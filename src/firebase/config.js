import firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC4IhqYFDMUGp_RWgx4MoaWj8B8aKfgwl4",
  authDomain: "image-displayer.firebaseapp.com",
  projectId: "image-displayer",
  storageBucket: "image-displayer.appspot.com",
  messagingSenderId: "936425594163",
  appId: "1:936425594163:web:4e1f5c4449a574b2043246",
};
firebase.initializeApp(firebaseConfig);
let projectStorage = firebase.storage();
let db = firebase.firestore();

export default projectStorage;
