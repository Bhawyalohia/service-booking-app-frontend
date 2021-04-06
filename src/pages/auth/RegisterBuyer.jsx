import React, { useState } from "react";
import  {auth} from "../../auth.js";
import {toast} from "react-toastify";
function RegisterBuyer()
{
    const [registerUser,setRegisterUser]=useState({
        userName:"",
        email:"",
        password:""
    });
    function handleChange(event)
    {
        const {name,value}=event.target;
        setRegisterUser({...registerUser,[name]:value});
        console.log(registerUser);
    }
    function handleSubmit(e)
    {
       e.preventDefault();
      //  const config={
      //      url:"http://localhost:3000/register/complete",
      //      handleCodeInApp: true
      //  }
      //  auth.sendSignInLinkToEmail(email, config)
      // .then(() => {
      //   window.localStorage.setItem('emailForSignIn', email);
      //   toast.success('A link has been sent to'+email+' .Click on it to continue.');
      // })
      // .catch((error) => {
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      // });
    }
    
    return(
      <div className="container p-5">
      <div className="row">
       <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <input value={registerUser.userName} onChange={handleChange} className="form-control " placeholder="Username" name="userName"/><br/>
          <input value={registerUser.email} onChange={handleChange} className="form-control" placeholder="Email Id" name="email"/><br/>
          <input value={registerUser.password} onChange={handleChange} className="form-control" placeholder="Password" name="password" type="password"/><br/>
          <button type="submit" className="btn btn-dark btn-block">Register</button>
        </form>
       </div>
      </div>
      </div>
    ); 
}
export default RegisterBuyer;