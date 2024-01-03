// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// // Firebase config
// const firebaseConfig = {
//   // apiKey: Constants.expoConfig.extra.apiKey,
//   // authDomain: Constants.expoConfig.extra.authDomain,
//   // projectId: Constants.expoConfig.extra.projectId,
//   // storageBucket: Constants.expoConfig.extra.storageBucket,
//   // messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
//   // appId: Constants.expoConfig.extra.appId,
//   // databaseURL: Constants.expoConfig.extra.databaseURL,
//   apiKey: "AIzaSyB2VNQ8A6_Zcg2HMW-597bz2Si1pWe0d40",
//   authDomain: "messagestore-5018a.firebaseapp.com",
//   projectId: "messagestore-5018a",
//   storageBucket: "messagestore-5018a.appspot.com",
//   messagingSenderId: "284299047588",
//   appId: "1:284299047588:web:8692a2362c863e11caac31",
// };
// initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const database = getFirestore();

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
  apiKey: "AIzaSyB2VNQ8A6_Zcg2HMW-597bz2Si1pWe0d40",
  authDomain: "messagestore-5018a.firebaseapp.com",
  projectId: "messagestore-5018a",
  storageBucket: "messagestore-5018a.appspot.com",
  messagingSenderId: "284299047588",
  appId: "1:284299047588:web:8692a2362c863e11caac31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
