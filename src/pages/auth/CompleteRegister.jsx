import React, { useState } from "react";
import  {auth} from "../../auth.js";
import {toast} from "react-toastify";
import firebase from "firebase/app" 
function CompleteRegister({history})
{
    const [password,setPassword]=useState("");
    function handleChange(event)
    {
        setPassword(event.target.value);
    }
    function handleSubmit(e)
    {
       e.preventDefault();
       const email=window.localStorage.getItem('emailForSignIn');
       console.log(email);
       auth.signInWithEmailLink(email,window.location.href).then((result)=>
       { 
          console.log(result.user);
          const user=auth.currentUser;
          user.updatePassword(password)
          .catch((error)=>
          {
             console.log(error);
          })
          const idToken=user.getIdTokenResult();
          history.push("/");
       })
       .catch ((error)=>
       { 
        console.log(error);
       });
    }
    return(
      <div className="container p-5">
      <div className="row">
       <div className="col-md-6 offset-md-3">
        <h4>Enter Password</h4>
        <form onSubmit={handleSubmit}>
          <input value={password} onChange={handleChange} className="form-control" type="password"/>
          <br></br>
          <button type="submit" className="btn btn-primary">Complete Registration</button>
        </form>
       </div>
      </div>
      </div>
    ); 
}
export default CompleteRegister;