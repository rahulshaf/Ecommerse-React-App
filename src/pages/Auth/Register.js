import React ,{useState} from 'react';
import {auth } from "../../firebase"
import { sendSignInLinkToEmail } from "firebase/auth"
import { toast } from 'react-toastify';

  


const Register=  () =>{
    const [email,setEmail]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            // This must be true.
            handleCodeInApp: true,
          };
          console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)

       


 sendSignInLinkToEmail(auth,email, actionCodeSettings).then(()=>{
 // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    toast.success("Email is sent to "+email+" .Click the link to complete your registration.");
    window.localStorage.setItem('emailForSignIn', email);
    setEmail("");
 }).catch((err)=>{
  toast.error(err.message);
  console.log(err);
 })
   
  }
    
    const registerForm=()=> <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" autoFocus value={email} 
            onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit" className ="btn btn-dark mt-1">Register</button>
           </form>
    return(
        <div className ="container p-5">
            <div className="row">  
            <div className="col-md-6 offset-md-3">
            <h3>Register</h3>
            {registerForm()}

            </div>
             </div>
        </div>
    )
}
export default Register;