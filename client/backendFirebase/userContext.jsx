import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../src/Firebase";
const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const userContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, response => {
            response ? setUser(response) : setUser(null);
            setError("");
            setLoading(false)
        });
        return unsubscribe
    }, [])

    const userRegist = (username, email, password, confirmpassword, number) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: username,
                    displayEmail: email,
                    displayNumber: number
                });
            })
            .then((response) => console.log(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }

    const userSign = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(email, password)
            .then((response) => console.log(response))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }

    const userLogout = () => {
        signOut(auth)
    }

    const userForgot = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {
        user,
        loading,
        error,
        userRegist,
        userSign,
        userLogout,
        userForgot
    }
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}