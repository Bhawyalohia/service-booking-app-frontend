import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory} from "react-router";
import {Route} from "react-router-dom"

function UserDashboardRoute({children,...rest}) 
{
    const history=useHistory();
    const {user}= useSelector((state)=>{
        console.log("state:",state);
        return state;
    });
    console.log("dashboard",user);
    if(user&&user.idToken)
    return <Route {...rest} render={()=>{return children;}}></Route>;
    // history.push("/login");
    return <h1>Login First</h1>;
}
export default UserDashboardRoute;