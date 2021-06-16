import axios from "axios";
import React, { useState } from "react"
import { useSelector } from "react-redux";
import Timer from "./timer";
function OrderForProfessionalCard(props)
{
    const {order}=props;
    const [condition,updateCondition]=useState(true);
    const [orderStatus,updateOrderStatus]=useState(order.orderStatus);
    const {user}=useSelector((state)=>{return state;})
    function handleAccept()
    {
        var date=new Date();
        var currentTime={hh:date.getHours(),mm:date.getMinutes(),ss:date.getSeconds()};
        console.log(currentTime);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/updateorderstatus`,{
        orderId:order._id,
        timeOfAcceptance:currentTime,
        orderStatus:"ACCEPTED_BY_SELLER"},{
            headers:{
                   authtoken:user.idToken
                 }
      })
      .then((res)=>
      {
           console.log(res.data);
           if(res.data.orderStatus)
           {
               updateOrderStatus(res.data.orderStatus);
           }
      })     
      .catch((err)=>{console.log(err)})
    }
    function handleReject()
    {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/updateorderstatus`,{orderId:order._id,orderStatus:"REJECTED_BY_SELLER"},{
              headers:{
                     authtoken:user.idToken
                   }
        })
        .then((res)=>
        {
             console.log(res.data);
             if(res.data.orderStatus)
             {
               updateOrderStatus(res.data.orderStatus);
             }
        })     
        .catch((err)=>{console.log(err)})
    }
    function checkPaymentStatus()
    {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/readOrder`,{orderId:order._id},{
            headers:{
                   authtoken:user.idToken
                 }
      })
      .then((res)=>
      {
           console.log(res.data);
           if(res.data.orderStatus.length!=0)
           {
             updateOrderStatus(res.data.orderStatus);
           }
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
        <div className="col">{condition&&<button className="btn btn-success" onClick={handleAccept}>Accept</button>}</div>
        <div className="col"><button className="btn btn-warning" onClick={handleReject}>Reject</button></div>
       </div>
       {(orderStatus.length>0&&orderStatus==="ACCEPTED_BY_SELLER")&&
       <div className="row">
           <Timer startTime={order.timeOfAcceptance} timeLimit={12} atTimeOut={checkPaymentStatus}></Timer>
       </div>
       }
   </div>
}
export default OrderForProfessionalCard;