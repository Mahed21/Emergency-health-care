import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/Firebase.initial";
initialAuthentication()
    const UseFirebase=()=>
    {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const [user, setUser]=useState({});
        const [error,setError]=useState('')
        const googleSignIn=()=>
        {
            signInWithPopup(auth, provider)
            .then((result)=>
            {
                //console.log(result.user);
                setUser(result.user);
            })
        }
        const signInEmail=(email,pass)=>
        {
           
            createUserWithEmailAndPassword(auth, email, pass)
            .then((result)=>
            {
                //console.log(result.user)
                setUser(result.user);
            })


        }
        const logOut=()=>
        {
            signOut(auth)
            .then(() => {
                setUser({});
              })
              .catch((error) => {
                setError(error.message)
              });
    
        }
      useEffect(()=>
      {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
                setUser(user);
            } 
          });
      },[])


        return{
            logOut,
            googleSignIn,
            signInEmail,
            user,
            
           
            
        }
    }
    export default UseFirebase;
