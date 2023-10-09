import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, { createContext, useContext, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBu94iy5A2RyLEIzTuOcQL1ajfalzuT9JE",
    authDomain: "watchitlater-3aaab.firebaseapp.com",
    projectId: "watchitlater-3aaab",
    storageBucket: "watchitlater-3aaab.appspot.com",
    messagingSenderId: "478650752159",
    appId: "1:478650752159:web:64703bc7549385190456aa",
    measurementId: "G-DYDWTR9G03"
  };




const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);

export function AuthProvider({ children }) {

const [isLoggedIn, setIsLoggedIn] = useState(false);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    setIsLoggedIn(true)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
    signOut(auth);
    setIsLoggedIn(false)
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
  }