import React, { useState } from "react";
import  {auth} from "../../auth.js";
import {toast} from "react-toastify";
function Register()
{
    const [email,setEmail]=useState("");
    function handleChange(event)
    {
        setEmail(event.target.value);
    }
    function handleSubmit(e)
    {
       e.preventDefault();
       const config={
           url:"http://localhost:3000/register/complete",
           handleCodeInApp: true
       }
       auth.sendSignInLinkToEmail(email, config)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        toast.success('A link has been sent to'+email+' .Click on it to continue.');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
    return(
      <div className="container p-5">
      <div className="row">
       <div className="col-md-6 offset-md-3">
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={handleChange} className="form-control"/>
          <br></br>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
       </div>
      </div>
      </div>
    ); 
}
export default Register;