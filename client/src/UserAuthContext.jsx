// import { create } from "@mui/material/styles/createTransitions";
// import { AuthErrorCodes } from "firebase/auth";
// import { setDoc, doc } from 'firebase/auth'
// import { addDoc, collection } from "firebase/firestore";
// import React, { useState, useEffect, useContext, Children } from 'react'
// import {
//     auth,
//     db,
//     onAuthStateChanged,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
// } from './Firebase'

// const AuthContext = React.createContext();
// export const useAuth = () => {
//     return useContext(AuthContext)
// }
// const UserAuthContext = ({ children }) => {
//     const [error, setError] = useState("")
//     const [currentUser, setCurrentUser] = useState()
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setCurrentUser(user)
//                 console.log(user.uid)
//             } else {
//                 console.log("No User Registered")
//             }
//         })
//     }, [])
//     const signUp = (email, password, username) => {
//         setError("")
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(async (result) => {
//                 console.log(result.user)
//                 // const userRef = doc(db, "users", result.user.id)
//                 // const docUserRef = await setDoc(userRef, {username})
//                 await addDoc(collection(db, "users"), { username })
//                     .then((re) => {
//                         alert("Registered")
//                     })
//                     .catch((e) => {
//                         console.log(e.message)
//                     })
//             })
//             .catch((error) => {
//                 if (error.code == "auth/email-already-in-use") {
//                     setError("Email Already Used, try Another Email")
//                 }
//                 else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
//                     setError("Password Must Be 8 Character")
//                 } else {
//                     setError(error.message)
//                 }
//             })
//     }
//     const value = {
//         currentUser,
//         signUp,
//         error,
//     }
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// export default UserAuthContext