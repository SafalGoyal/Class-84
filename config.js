import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = { 
apiKey: "AIzaSyDLA7mkjOtnatgdH4ggxC4JDLU40tI3mF8",
authDomain: "e-library-5c5ac.firebaseapp.com", 
projectId: "e-library-5c5ac",
storageBucket: "e-library-5c5ac.appspot.com",
messagingSenderId: "636406420113",
appId: "1:636406420113:web:f422558e9362948a21a530" 
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
