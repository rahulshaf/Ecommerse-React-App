import React ,{useState,useEffect} from 'react';
import {auth } from "../../firebase"
import { toast } from 'react-toastify';
import {isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";


  


const RegisterComplete=  ({history}) =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

         useEffect( ()=>{
        setEmail(window.localStorage.getItem('emailForSignIn'));
        console.log("window :"+window.localStorage.getItem('emailForSignIn'));
        console.log("email :" +email);
        console.log("link is :"+window.location.href)
    },[])
   //handle submit function
    const handleSubmit = async (e)=>{
        console.log("handle email is :"+email);
        e.preventDefault();
        if(!email || !password){
            toast.error("Email and Password is required for completing registration");
            return;
        }
        if(password.length<6){
            toast.error("Password length should be greater than 5");
            return;
        }
   

        try{
            const result = await auth.signInWithEmailLink(email,window.location.href);

        }catch(err){
            console.log(err);
            toast.error(err.message);
        }

          }

    const registerCompleteForm=()=> <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={email} 
                placeholder="Email" disabled
            />
            <input type="text" className="form-control mt-1" autoFocus value={password} 
            onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" required
            />
            <button type="submit" className ="btn btn-dark mt-1">Register</button>
           </form>
    return(
        <div className ="container p-5">
            <div className="row">  
            <div className="col-md-6 offset-md-3">
            <h3>Register Complete</h3>
            {registerCompleteForm()}

            </div>
             </div>
        </div>
    )
}
export default RegisterComplete;