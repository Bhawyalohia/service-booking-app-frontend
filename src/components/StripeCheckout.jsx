import React, { useEffect, useState } from "react";
import "../stripe.css";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import { useSelector } from "react-redux";
import axios from "axios";

function StripeCheckout({orderId})
{
  const {user} =useSelector((state)=>{return state;})
  const stripe = useStripe();
  const elements=useElements();
  const [clientSecret,setClientSecret]=useState("");
  useEffect(()=>
  {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/payment/create-payment-intent`,{orderId:orderId},{
      headers:
      {
        authtoken:user.idToken
      }
    })
    .then((res)=>
    {
        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret);
    })
    .catch((err)=>{console.log(err)})
  },[]);
  const cardStyle={
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    }
  };
  function handleChange(e)
  {
    
  }
  async function handleSubmit(e)
  {
    console.log("Event on submit: ",e.target);
    e.preventDefault();
    try{
     const payload=await stripe.confirmCardPayment(clientSecret,{
         payment_method: {
          card: elements.getElement(CardElement)
        }
     });
     if(payload.error)
     {
       console.log("error:",payload.error.message);
     }
     else
     {
       console.log("successfull");
     }
     console.log(payload);
    }
    catch(err)
    {
      console.log("catch error:",err);
    }
  }
  return (<>
  <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
    <CardElement id="card-element"
     options={cardStyle}
     onChange={handleChange}
    >
    </CardElement>
    <br></br>
    <button className="stripe-button" type="submit" onSubmit={handleSubmit}>Pay</button>
  </form>
  </>);
}
export default StripeCheckout;