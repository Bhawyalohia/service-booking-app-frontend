import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Header from "./Header.jsx";
function App() {
  return (
    <>
    <Header></Header>
    <Switch>
     <Route exact path="/"  component={Home}></Route>
     <Route exact path="/login" component={Login}></Route>
     <Route exact path="/register" component={Register}></Route>
    </Switch> 
    </>
);
}

export default App;
