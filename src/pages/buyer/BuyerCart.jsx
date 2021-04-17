import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../../components/CartProductCard";
import axios from "axios";
function BuyerCart()
{
  const [loading,updateLoading]=useState(true);
  const [cart,updateCart]=useState([]);
  const {user}=useSelector((state)=>{return state;});
   useEffect(()=>
   {
      axios.post("http://localhost:8000/buyer/cart",{},{
        headers:{
          authtoken:user.idToken
        }
      })
      .then((result)=>
      {
          updateCart(result.data);
          console.log("result data:",result.data);
          console.log("cart:",cart);
          updateLoading(false);
      })
      .catch((error)=>{console.log(error)})
   },[])
   function getCard(service)
   {
    return <div className="col-4"><CartProductCard service={service} removeFromCart={removeFromCart}></CartProductCard></div>
   }
   function removeFromCart(productId)
   {
      updateCart(cart.filter(item => item._id !== productId));
   }
   return <div className="container">
     <div className="row p-5">
        {(!loading)&&cart.map(getCard)}
     </div>
   </div>
}
export default BuyerCart;
