import React from "react";
import {useState} from "react";
import  {auth} from "../../auth.js";
import {googleAuthProvider} from "../../auth.js"
import {toast} from "react-toastify";
import {saveUserInDb,currentUser} from "../../functions/auth"
import {useDispatch} from "react-redux"
function Login()
{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
   const dispatch=useDispatch();
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
     .then((userCredential) => {
      var user = userCredential.user;
      console.log("login user: ",user);
      user.getIdTokenResult()
      .then((result)=>
      {
        currentUser(result.token)
        .then((res)=>
        {
          console.log(res)
           dispatch({
              type:"LOGIN_WITH_EMAIL",
              payload:res.data
           });
        })
        .catch((error)=>{console.log(error);});
      })
      .catch((error)=>{console.log(error);})      
   })
   .catch((err)=>{toast.error(err.message);})
  }


  function handleSubmit(e)
  {
     e.preventDefault();
     auth.signInWithEmailAndPassword(email, password)
     .then((userCredential) => {
      var user = userCredential.user;
      console.log("login user: ",user);
      user.getIdTokenResult()
      .then((result)=>
      {
        currentUser(result.token)
        .then((res)=>
        {
          console.log(res)
           dispatch({
              type:"LOGIN_WITH_EMAIL",
              payload: {...res.data,
                idToken:result.token}
           });
        })
        .catch((error)=>{console.log(error);});
      })
      .catch((error)=>{console.log(error);})      
     })
     .catch((error)=>{toast.error(error.message);})
  }


  return(
    <div className="container p-5">
    <div className="row">
     <div className="col-md-6 offset-md-3">
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={handleEmailChange} className="form-control" placeholder="Email"/>
        <br></br>
        <input value={password} onChange={handlePasswordChange} className="form-control" placeholder="Password"/>
        <br></br>
        <button type="submit" className="btn btn-light btn-block" >Login</button>
      </form>
      <br/>
      <button onClick={handleLoginWithGoogle} className="btn btn-dark btn-block">Login with google</button>
     </div>
    </div>
    </div>
  ); 
}
export default Login;