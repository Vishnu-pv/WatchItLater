import { createContext, useContext, useEffect, useState } from "react"
import {
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth, signInWithGoogle} from '../../firebase'

const userAuthContext = createContext()

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState('')
    function signIn(){
      signInWithGoogle()
    }

    async function logOut() {
        return await signOut(auth);
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[]);

    return <userAuthContext.Provider value={{user,logOut,signIn}}>
            {children}
    </userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext)
}