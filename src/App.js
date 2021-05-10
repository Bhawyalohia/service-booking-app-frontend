import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Header from "./Header.jsx";
import CompleteRegister from "./pages/auth/CompleteRegister"
import {auth} from "./auth"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {currentUser} from "./functions/auth";
import UserDashboard from "./pages/UserDashboard";
import UserDashboardRoute from "./protectedRoutes/UserDashboardRoute"; 
import RegisterBuyer from './pages/auth/RegisterBuyer';
import RegisterProfessional from './pages/auth/RegisterProfessional';
import BanquetHallServices from "./pages/BanquetHallServices"
import Product from "./pages/product"
import CateringServices from "./pages/CateringServices";
import DjServices from "./pages/DjServices";
import ProfessionalProducts from "./pages/professional/ProfessionalProducts";
import ProfessionalAccountSettings from "./pages/professional/ProfessionalAccountSettings";
import ProfessionalOrders from "./pages/professional/ProfessionalOrders";
import BuyerAccountSettings from "./pages/buyer/BuyerAccountSettings"
import BuyerCart from "./pages/buyer/BuyerCart";
import BuyerOrders from "./pages/buyer/BuyerOrders";
import BookService from "./pages/BookService";
import AddProduct from "./pages/professional/AddProduct";
import UpdateProduct from "./pages/professional/UpdateProduct";
function App() {
  const dispatch=useDispatch(); 
  //const {service,user}=useSelector((state)=>{return state})
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
              console.log(res);
              if(res.data){
               dispatch({
                  type:"LOGIN_WITH_EMAIL",
                  payload: {
                    ...res.data,
                    idToken:result.token
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
     <Route exact path="/register/buyer" component={RegisterBuyer}></Route>
     <Route exact path="/register/professional" component={RegisterProfessional}></Route>
     <UserDashboardRoute exact path="/user-dashboard" component={UserDashboard}></UserDashboardRoute>
     <Route exact path="/catering-services" component={CateringServices}></Route>
     <Route exact path="/dj-services" component={DjServices}></Route>
     <Route exact path="/banquet-hall-services" component={BanquetHallServices}></Route>
     <Route exact path="/product/:slug" component={Product} ></Route>
     <Route exact path="/buyer/cart" component={BuyerCart} ></Route>
     <Route exact path="/buyer/orders" component={BuyerOrders} ></Route>
     <Route exact path="/buyer/account-settings" component={BuyerAccountSettings} ></Route>
     <Route exact path="/professional/products" component={ProfessionalProducts} ></Route>
     <Route exact path="/professional/account-settings" component={ProfessionalAccountSettings} ></Route>
     <Route exact path="/professional/orders" component={ProfessionalOrders} ></Route>
     <Route exact path="/book-service" component={BookService} ></Route>
     <Route exact path="/professional/add-product" component={AddProduct} ></Route>
     <Route exact path="/professional/update-product/:slug" component={UpdateProduct} ></Route>
    </Switch> 
    </>
);
}

export default App;
