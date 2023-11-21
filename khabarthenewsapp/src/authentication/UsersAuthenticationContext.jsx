import { createContext, useContext, useState } from "react";
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup
} from "firebase/auth";
import { authentication } from "./firebase";


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
          console.log("Auth", currentuser);
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

  export function useUserAuthentication() {
    return useContext(userAuthenticationContext);
  }