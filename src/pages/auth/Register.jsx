import React, { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link,useHistory} from "react-router-dom";
function Register()
{
  const history=useHistory();
   function handleBuyer()
   {
     history.push("/user/buyer");
   }
   function handleProfessional()
   {
     history.push("/user/professional");
   }
    return(
      <div className="container p-5">
       <div className="row">
       <div className="col-md-6 offset-md-3" >
        <button className="btn btn-light btn-block" onClick={handleBuyer}>Buyer</button>
        </div>
        <div className="col-md-6 offset-md-3" style={{paddingTop:"40px"}}>
        <button className="btn btn-dark btn-block" onClick={handleProfessional}>Professional</button>
        </div>
       </div>
      </div>
    );  
}
export default Register;


