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
import { useEffect } from 'react';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>
  {
     auth.onAuthStateChanged((user)=>
     {
        if(user)
        {
          const idToken=user.getIdTokenResult();
          dispatch({
               type: 'LOGIN_WITH_EMAIL',
               payload: {
                 email: user.email,
                 idToken: idToken
               }    
          });
        }
        else
        {
          dispatch({
            type:'LOG_OUT',
            payload:null
          });
        }
     })
  })
  return (
    <>
    <Header></Header>
    <Switch>
     <Route exact path="/"  component={Home}></Route>
     <Route exact path="/login" component={Login}></Route>
     <Route exact path="/register" component={Register}></Route>
     <Route exact path="/register/complete" component={CompleteRegister}></Route>
    </Switch> 
    </>
);
}

export default App;
