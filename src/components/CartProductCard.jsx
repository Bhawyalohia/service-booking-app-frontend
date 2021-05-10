import {useSelector} from "react-redux";
import React, { useState }  from "react";
import axios from "axios"
import {Link} from "react-router-dom"
function ProductInCartCard(props)
{
   const {service}=props;
   const {user}=useSelector((state)=>
   {return state})

   function handleRemoveFromCart()
   {
      axios.post("http://localhost:8000/buyer/removefromcart",service,{
      headers:{
         authtoken:user.idToken
      }
    })
    .then((res)=>{
      console.log(res);
   })
    .catch((error)=>{console.log("could not send add to cart request:",error)})
    props.removeFromCart(service._id);
   }
   return ((<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
   <img className="card-img-top" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="Card image cap" />
   <div className="card-body">
   <h5 className="card-title">{service.title}</h5>
   <p className="card-text">{service.description}</p>
   <p className="col">Rs.{service.price} (per day)</p>
   <div className="row">
   <div className="col"><Link to={{pathname:"/book-service",data:{service:service}}} >Book Service</Link></div>
   <div className="col" onClick={handleRemoveFromCart}><a>Remove from Cart</a></div>
   </div>
   </div>
   </div>));
}
export default ProductInCartCard;