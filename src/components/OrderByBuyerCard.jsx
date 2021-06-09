import axios from "axios";
import React, { useState } from "react"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
function OrderByBuyerCard(props)
{
    const {order}=props;
    const [condition,updateCondition]=useState(true);
    const {user}=useSelector((state)=>{return state;})
    function handleMakePayment()
    {
    //     axios.post("http://localhost:8000/orders/updateorderstatus",{orderId:order._id,orderStatus:"ACCEPTED_BY_SELLER"},{
    //         headers:{
    //                authtoken:user.idToken
    //              }
    //   })
    //   .then((res)=>
    //   {
    //        console.log(res.data);
    //   })     
    //   .catch((err)=>{console.log(err)})
    }
    function handleCancel()
    {
        axios.post("http://localhost:8000/orders/updateorderstatus",{orderId:order._id,orderStatus:"REJECTED_BY_BUYER"},{
              headers:{
                     authtoken:user.idToken
                   }
        })
        .then((res)=>
        {
             console.log(res.data);
        })     
        .catch((err)=>{console.log(err)})
    }
   return <div>
       <div className="row">
        <div className="col">service</div>
        <div className="col">{order.service&&order.service.title}</div>
       </div>
       <div className="row">
        <div className="col">date</div>
        <div className="col">{order.date}</div>
       </div>
       <div className="row">
        <div className="col">place</div>
        <div className="col">{order.address}</div>
       </div>
       <div className="row">
        <div className="col">status</div>
        <div className="col">{order.orderStatus}</div>
       </div>
       <div className="row">
        <div className="col">{condition&&<button className="btn btn-success" onClick={handleMakePayment}><Link to="/make-payment">Make Payment</Link></button>}</div>
        <div className="col"><button className="btn btn-warning" onClick={handleCancel}>Cancel</button></div>
       </div>
   </div>
}
export default OrderByBuyerCard;