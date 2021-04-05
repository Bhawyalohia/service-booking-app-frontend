import React, { useState } from "react";
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, LoginOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {auth} from "./auth.js";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import {useSelector} from "react-redux";
import UserBasedDropdown from "./components/UserBasedDropdown";
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
    
  return (
    <Menu onClick={handleClick} mode="horizontal">
      <Menu.Item key="Explore" icon={<HomeOutlined />}>
       <Link to="/" >Explore</Link>
      </Menu.Item>
      {!user?(<><Menu.Item key="Login" icon={<LoginOutlined />} className="float-right">
       <Link to="/login" >Login</Link> 
      </Menu.Item>
      <Menu.Item key="Register" icon={<AppstoreOutlined />} className="float-right">
        <Link to="/register" >Register</Link>
      </Menu.Item>
      </>):(<UserBasedDropdown type={user.type} />)
      }
    </Menu>
  );

}
export default Header;