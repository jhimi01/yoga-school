import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getRole } from '../api/auth';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const providerGoogle = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [role, setRole] = useState(null)


    useEffect(()=>{
        if ((user)) {
            getRole(user?.email)
            .then((data)=>{
                setRole(data)
            })
            
        }
    },[user])


    // signup with email
    const signupEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in with email 
    const loginWithEmail = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    // updateuserProfile
    const updateUserProfile=(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }



    // login with google account
    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, providerGoogle)
    }

    // log out
    const logout = ()=>{
        return signOut(auth)
    };



    // user
    useEffect(()=>{
        const unsibscribe = onAuthStateChanged(auth, loggedInUser =>{
            setUser(loggedInUser)
            setLoader(false)
        })
        return()=>{
            unsibscribe()
        }
    },[])




    const authInfo={
      user,
      loader,
      role,
      signupEmail,
      loginWithEmail,
      loginWithGoogle,
      logout,
      updateUserProfile,
      setRole
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;