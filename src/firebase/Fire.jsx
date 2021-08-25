import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

let firebaseConfig = {
  apiKey: "AIzaSyDttfdA7vuxyY7iKwM8GKLr_mI3enL-gDI",
  authDomain: "auth-63571.firebaseapp.com",
  projectId: "auth-63571",
  storageBucket: "auth-63571.appspot.com",
  messagingSenderId: "1072671403973",
  appId: "1:1072671403973:web:b386ae56d8f25cb37165ac",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
