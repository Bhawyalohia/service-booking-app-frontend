import React from "react";
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {auth} from "../auth.js"
import {useHistory,Link} from "react-router-dom";
import {toast} from "react-toastify";
function UserBasedDropdown(props)
{
    const history=useHistory();
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
        history.push("/home");
    }
    const menuBuyer = (
        <Menu>
          <Menu.Item><Link to="/login">Cart</Link></Menu.Item>
          <Menu.Item><Link to="/login">Orders</Link></Menu.Item>
          <Menu.Item><Link to="/login">Account Settings</Link></Menu.Item>
          <Menu.Item onClick={handleLogOut}>Sign Out</Menu.Item>
        </Menu>
      );
      const menuSeller = (
        <Menu>
          <Menu.Item><Link to="/login">Products</Link></Menu.Item>
          <Menu.Item><Link to="/login">Orders</Link></Menu.Item>
          <Menu.Item><Link to="/login">Account Settings</Link></Menu.Item>
          <Menu.Item onClick={handleLogOut}>Sign Out</Menu.Item>
        </Menu>
      );
    return (<Dropdown overlay={props.type==="buyer"?menuBuyer:menuSeller} className="float-right" >
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{paddingRight:"50px"}}>
      <UserOutlined style={{color:"black"}} />
    </a>
  </Dropdown>)
}
export default UserBasedDropdown;
