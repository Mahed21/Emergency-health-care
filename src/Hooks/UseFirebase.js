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
        //for google
        const googleSignIn=()=>
        {
            return signInWithPopup(auth, provider)
           
        }
        //for email pass
        const signInEmail=(email,pass)=>
        {
            if(pass.length<6){
                setError('password Should be 6 character long')
                return ;
            }
           
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
            error
            
           
            
        }
    }
    export default UseFirebase;
