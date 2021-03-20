import React, { useState } from "react";

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
function Header()
{
   const [current,setState]=useState('Home');
   const { SubMenu } = Menu;
   function handleClick(e) {
     console.log('click ',e);
     setState(e.key);
   };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="Home" icon={<MailOutlined />}>
       <Link to="/" >Home</Link>
      </Menu.Item>
      <Menu.Item key="Login" icon={<AppstoreOutlined />} className="float-right">
       <Link to="/login" >Login</Link> 
      </Menu.Item>
      <Menu.Item key="Register" icon={<AppstoreOutlined />} className="float-right">
          <Link to="/register" >Register</Link>
      </Menu.Item>
    </Menu>
  );

}
export default Header;