import React, { useState } from "react";
import  {auth} from "../../auth.js";
import {toast} from "react-toastify";

import { saveUserInDb } from "../../functions/auth.js";
import { useDispatch } from "react-redux";
function RegisterBuyer()
{
    const dispatch=useDispatch();
    const [registerUser,setRegisterUser]=useState({
        userName:"",
        email:"",
        password:"",
        role:"buyer"
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
       auth.createUserWithEmailAndPassword(registerUser.email,registerUser.password)
       .then((userCredential) => {
         var user = userCredential.user;
          user.getIdTokenResult()
          .then((result)=>
          {
              saveUserInDb(result.token,registerUser)
              .then((res)=>{console.log(res)
                dispatch({
                  type:"LOGIN_WITH_EMAIL",
                  payload:{...res.data,
                    idToken: result.token}
               });
              })
              .catch((err)=>{console.log(err)});
          })
          .catch((error)=>{console.log(error)});
       })
       .catch((error) => {console.log(error)});
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