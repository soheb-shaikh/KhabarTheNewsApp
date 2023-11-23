import { createContext, useContext, useState, useEffect } from "react";
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { authentication } from "./Firebase";

const userAuthenticationContext = createContext();

export function useUserAuthentication() {
  return useContext(userAuthenticationContext);
}

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function singIn(email, password) {
        return signInWithEmailAndPassword(authentication, email, password);
      }
      
      function signUp(email, password) {
        return createUserWithEmailAndPassword(authentication, email, password);
      }
      
      function logOff() {
        return signOut(authentication);
      }
      
      function gSignIn() {
        const googleAuthenticationProvider = new GoogleAuthProvider();
        return signInWithPopup(authentication, googleAuthenticationProvider);
      }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (currentuser) => {
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    return (
      <userAuthenticationContext.Provider
        value={{ user, singIn, signUp, logOff, gSignIn }}
      >
        {children}
      </userAuthenticationContext.Provider>
    );
  }