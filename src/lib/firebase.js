import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBCKrVoWtZ84iJPMJmY9JxxepS4ftGbWRA",
  authDomain: "insta-8f458.firebaseapp.com",
  projectId: "insta-8f458",
  storageBucket: "insta-8f458.appspot.com",
  messagingSenderId: "966989905820",
  appId: "1:966989905820:web:065bb86bd0dd7ee6df1259"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
