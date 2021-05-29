import React  from "react";
import {Link} from "react-router-dom";
function CatererCard(props)
{
   const {service}=props;
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
      <img className="card-img-top" src={service.images.length!==0?service.images[0].Location:"https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg"} alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">{service.title}</h5>
      <p className="card-text">{service.description}</p>
      <div className="row">
       <div className="col">Rs.{service.price} <span>(per plate)</span></div>
       <div className="col"><Link to={"/product/"+ service._id}>Check it </Link></div>
      </div>
     </div>
   </div>);
}
export default CatererCard;