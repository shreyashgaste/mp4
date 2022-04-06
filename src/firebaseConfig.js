// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure(); 
const config = {
  apiKey: "AIzaSyAyzYgeQ1fn6RHoqSHmELZCWi74n3x9awY",
  authDomain: "fir-for-mp.firebaseapp.com",
  projectId: "fir-for-mp",
  storageBucket: "fir-for-mp.appspot.com",
  messagingSenderId: "906275210200",
  appId: "1:906275210200:web:01d2905ad8ed837a3e68ad",
  measurementId: "G-WVBYLW6MVM",
};

firebase.initializeApp(config);

export function getCurrenuser() {
  // return firebase.auth().currentUser
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    })
  })

}

export function logoutUser() {
  return firebase.auth().signOut();
}

export async function loginUser(username, password) {
  const email = `${username}@newspa.com`;
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(res);
    return res;    
  } catch (error) {
    console.log(error);
    // presentToast(error.message);
    toast(error.message);
    return false;
  }
}

export async function registerUser(username, password) {
  const email = `${username}@newspa.com`;
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    // presentToast(error.message);
    console.log(error);
    return false;
  }
}