import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderByBuyerCard from '../../components/OrderByBuyerCard'
function BuyerOrders()
{
     const [orders,updateOrders]=useState([]);
     const {user}=useSelector((state)=>{return state;})
     useEffect(()=>
     {
         if(user&&user.idToken)
         {
             axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/readorders`,{},{
                  headers:{
                       authtoken:user.idToken
                  }
             })
             .then((response)=>
             {
               updateOrders(response.data);
             })
             .catch((err)=>{console.log(err)})
         }
     },[user]);
     function getOrdersCard(order)
     {
          return <div className="col-12" style={{paddingTop:"2%",paddingBottom:"2%"}}><OrderByBuyerCard order={order}/></div>
     }
     return user?(<div className="container p-5">
            <div className="row">
                  {orders.map(getOrdersCard)}
            </div>
           </div>):<h1>Login First</h1>
}
export default BuyerOrders;
