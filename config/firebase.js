import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  // apiKey: Constants.expoConfig.extra.apiKey,
  // authDomain: Constants.expoConfig.extra.authDomain,
  // projectId: Constants.expoConfig.extra.projectId,
  // storageBucket: Constants.expoConfig.extra.storageBucket,
  // messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  // appId: Constants.expoConfig.extra.appId,
  // databaseURL: Constants.expoConfig.extra.databaseURL,
  apiKey: "AIzaSyB2VNQ8A6_Zcg2HMW-597bz2Si1pWe0d40",
  authDomain: "messagestore-5018a.firebaseapp.com",
  projectId: "messagestore-5018a",
  storageBucket: "messagestore-5018a.appspot.com",
  messagingSenderId: "284299047588",
  appId: "1:284299047588:web:8692a2362c863e11caac31",
  //  @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
