import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Header from "./Header.jsx";
import CompleteRegister from "./pages/auth/CompleteRegister"
import {auth} from "./auth"
import {useDispatch} from "react-redux";
import {useEffect} from 'react';
import {currentUser} from "./functions/auth";
import UserDashboard from "./pages/UserDashboard";
import UserDashboardRoute from "./routes/UserDashboardRoute"; 
function App() {
  const dispatch=useDispatch(); 
  useEffect(()=>
  {
     auth.onAuthStateChanged((user)=>
     {
        if(user)
        {
          console.log("i ran");
          user.getIdTokenResult()           
          .then((result)=>
          {
             currentUser(result.token)
            .then((res)=>
            {
              if(res.data){
               dispatch({
                  type:"LOGIN_WITH_EMAIL",
                  payload:{
                   name:res.data.name,
                   email:res.data.email,
                   idToken:result.token,
                   picture:res.data.picture,
                   role:res.data.role
                  }
               });
              }
            })
            .catch((error)=>{console.log(error);})
          })
          .catch((error)=>{console.log(error);})    
        }
        else
        {
          dispatch({
            type:'LOG_OUT',
            payload:null
          });
        }
     })
  },[])
  return (
    <>
    <Header></Header>
    <Switch>
     <Route exact path="/"  component={Home}></Route>
     <Route exact path="/login" component={Login}></Route>
     <Route exact path="/register" component={Register}></Route>
     <Route exact path="/register/complete" component={CompleteRegister}></Route>
     <UserDashboardRoute exact path="/user-dashboard" component={UserDashboard}></UserDashboardRoute>
    </Switch> 
    </>
);
}

export default App;
