import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
