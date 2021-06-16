import React from "react";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout.jsx"
//load stripe outside to avoid recreating stripe objecton every render.
import "../stripe.css";
const promise=loadStripe("pk_test_51IxpYgSG20art250zOXNFhnHZrhvgS4ShJxEKvduduItY2GIP1ezlrfDnYvOQ0QqoSjCzzTQCSPbDgrf8G9ZDghC00V7y81ntA");
function MakePayment(props)
{
    const orderId=props.match.params.slug;
    return (<div className="container p-5 text-center">
        <Elements stripe={promise}>
         <StripeCheckout orderId={orderId}/>
       </Elements>
    </div>);

}
export default MakePayment;