import React  from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
function ProductInProfessionalsProductCard(props)
{
   const {service}=props;
   const {user}=useSelector((state)=>{return state})

   function handleDelete()
   {
     axios.post("http://localhost:8000/professional/deleteproduct",service,{
       headers:{
        authtoken:user.idToken
       }
     })
     .then((res)=>{
      console.log(res);
      })
     .catch((error)=>{console.log("could not send delete request:",error)})
      props.deleteService(service._id);
   }
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
   <img className="card-img-top" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="Card image cap" />
   <div className="card-body">
   <h5 className="card-title">{service.title}</h5>
   <p className="card-text">{service.description}...</p>
   <p className="col">Rs.{service.price} (per day)</p>
   <div className="row">
   <div className="col"><Link to={"/professional/update-product/"+service._id}>Update</Link></div>
   <div className="col" onClick={handleDelete}><a>Delete</a></div>
   </div>
   </div>
   </div>);
}
export default ProductInProfessionalsProductCard;

