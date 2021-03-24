import React from "react";
import {useState} from "react";
import  {auth} from "../../auth.js";
import {googleAuthProvider} from "../../auth.js"
import {toast} from "react-toastify";
function Login()
{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  function handleEmailChange(event)
  {
      setEmail(event.target.value);
  }
  function handlePasswordChange(event)
  {
      setPassword(event.target.value);
  }
  function handleLoginWithGoogle(e)
  {
     e.preventDefault();
     auth.signInWithPopup(googleAuthProvider)
     .then((result)=>
     {
        console.log(result.user);
     })
     .catch((err)=>
     {

     })
  }
  function handleSubmit(e)
  {
     e.preventDefault();
     auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
       var user = userCredential.user;
       console.log("usercredential: ",userCredential);
       console.log("login user: ",user);
       
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      toast.error(error.message);
    });
  }
  return(
    <div className="container p-5">
    <div className="row">
     <div className="col-md-6 offset-md-3">
      <form onSubmit={handleSubmit}>
        <h4>Email</h4>
        <input value={email} onChange={handleEmailChange} className="form-control"/>
        <br></br>
        <h4>Password</h4>
        <input value={password} onChange={handlePasswordChange} className="form-control"/>
        <br></br>
        <button type="submit" className="btn btn-primary btn-block" >Login</button>
      </form>
      <br/>
      <button onClick={handleLoginWithGoogle} className="btn btn-danger btn-block">Login with google</button>
     </div>
    </div>
    </div>
  ); 
}
export default Login;