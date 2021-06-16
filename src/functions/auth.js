import axios from "axios";
import {toast} from "react-toastify";
export async function saveUserInDb(idToken,user)
{
  console.log("full token",idToken);
  const role=(user.role==="buyer"?"buyer":"professional");
   const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-${role}`,user,{
      headers: {
        authtoken : idToken
      }
    });
  return result;
}
export async function currentUser(idToken)
{
  console.log("full token",idToken);
   const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/read-user`,{},{
      headers: {
        authtoken : idToken
      }
    });
  return result;
}