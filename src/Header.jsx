import React, { useState } from "react";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {auth} from "./auth.js";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import {useSelector} from "react-redux";

function Header()
{
   const [current,setState]=useState('Home');
   const {user}=useSelector((state)=>
   {
     return state;
   });
   console.log("hihi")
   const { SubMenu } = Menu;
   const history=useHistory();
   const dispatch=useDispatch();
   function handleClick(e) {
     console.log('click ',e);
     setState(e.key);
   };
    function handleLogOut()
    {
        auth.signOut().then(()=>
        {
            toast.success("Logged Out Successfully");    
        })
        .catch((error)=>
        {
          toast.error("Logged Out Successfully");    
        });
        history.push("/login");
    }
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="Home" icon={<MailOutlined />}>
       <Link to="/" >Home</Link>
      </Menu.Item>
      {!user&&(<><Menu.Item key="Login" icon={<AppstoreOutlined />} className="float-right">
       <Link to="/login" >Login</Link> 
      </Menu.Item>
      <Menu.Item key="Register" icon={<AppstoreOutlined />} className="float-right">
        <Link to="/register" >Register</Link>
      </Menu.Item>
      </>)
      }
      <Menu.Item icon={ <MailOutlined /> } onClick={handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );

}
export default Header;