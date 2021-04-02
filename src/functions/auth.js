import axios from "axios";
import {toast} from "react-toastify";
export async function saveUserInDb(idToken)
{
  console.log("full token",idToken);
   const result = await axios.post("http://localhost:8000/api/create-or-update-user",{},{
      headers: {
        authtoken : idToken
      }
    });
  return result;
}
export async function currentUser(idToken)
{
  console.log("full token",idToken);
   const result = await axios.post("http://localhost:8000/api/current-user",{},{
      headers: {
        authtoken : idToken
      }
    });
  return result;
}