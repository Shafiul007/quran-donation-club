import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const googleProvider = new GoogleAuthProvider();

    const createEmail=(email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);

    }

    const updateUserProfile=(name,photo)=>{
        return  updateProfile(auth.currentUser, {displayName: name, photoURL:photo});
    }

    const loginOut=()=>{
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSub=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setLoading(false);
              // ...
            } else {
                
            }
          });
        return ()=>{
            unSub();
        }
    },[])


    const authInfo={
        loading,
        createEmail,
        loginEmail,
        googleLogin,
        loginOut,
        user,
        updateUserProfile,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;