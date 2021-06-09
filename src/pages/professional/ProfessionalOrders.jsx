import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderForProfessionalCard from '../../components/OrderForProfessionalCard'
function ProfessionalOrders()
{
     const [orders,updateOrders]=useState([]);
     const {user}=useSelector((state)=>{return state;})
     useEffect(()=>
     {
         if(user&&user.idToken)
         {
             axios.post("http://localhost:8000/orders/readorders",{},{
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
          return <div className="col" ><OrderForProfessionalCard order={order}/></div>
     }
     return user?(<div className="container">
            <div className="row">
                  {orders.map(getOrdersCard)}
            </div>
           </div>):<h1>Login First</h1>
}
export default ProfessionalOrders;
