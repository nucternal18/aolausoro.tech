import "regenerator-runtime/runtime";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVHX4TdcaVQ6OYU0BzowtW27fymh8Lukk",
  authDomain: "aolausoro-tech.firebaseapp.com",
  databaseURL: "https://aolausoro-tech.firebaseio.com",
  projectId: "aolausoro-tech",
  storageBucket: "aolausoro-tech.appspot.com",
  messagingSenderId: "1064703841378",
  appId: "1:1064703841378:web:5c76bd0e1cf3b9cad92d3b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = projectFirestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

export {
  auth,
  projectStorage,
  projectFirestore,
  timestamp,
  createUserProfileDocument,
};
