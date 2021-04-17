import React, { useState } from "react";
import  {auth} from "../../auth.js";
import {toast} from "react-toastify";
import { Select } from 'antd';
import { saveUserInDb } from "../../functions/auth.js";
import {useDispatch} from "react-redux";
function RegisterProfessional()
{
  const { Option } = Select;
  const dispatch=useDispatch();
  const [registerUser,setRegisterUser]=useState({
      userName:"",
      email:"",
      password:"",
      role:"",
      address:"",
      city:"",
      state:"",
      pincode:"",
      phoneNo:""  
  });
  function handleChange(event)
  {
      const {name,value}=event.target;
      setRegisterUser({...registerUser,[name]:value});
      console.log(registerUser,value);
  }
  
   function onChange(value) {
    setRegisterUser({...registerUser,role:value});
    console.log(registerUser,value); 
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
        <input value={registerUser.address} onChange={handleChange} className="form-control" placeholder="Address" name="address"/><br/>
        <input value={registerUser.city} onChange={handleChange} className="form-control" placeholder="City" name="city"/><br/>
        <input value={registerUser.state} onChange={handleChange} className="form-control" placeholder="State" name="state"/><br/>
        <input value={registerUser.pincode} onChange={handleChange} className="form-control" placeholder="Pincode" name="pincode"/><br/>
        <input value={registerUser.phoneNo} onChange={handleChange} className="form-control" placeholder="Phone Number" name="phoneNo"/><br/>
        <Select
           showSearch
           style={{ width:"100%" }}
           placeholder="Select a profession"
           onChange={onChange}
         >
           <Option value="Banquet Hall">Banquet Hall</Option>
           <Option value="Caterer">Caterer</Option>
           <Option value="Dj">Dj</Option>
         </Select>
        <button style={{marginTop:"30px"}}type="submit" className="btn btn-dark btn-block">Register</button>
      </form>
     </div>
    </div>
    </div>
  ); 
}
export default RegisterProfessional;
