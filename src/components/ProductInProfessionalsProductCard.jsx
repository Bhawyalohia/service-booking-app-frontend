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
     axios.post(`${process.env.REACT_APP_BACKEND_URL}/professional/deleteproduct`,service,{
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
   <img className="card-img-top" src={service.images.length!==0?service.images[0].Location:"https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg"} alt="Card image cap" />
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

