import React  from "react";
import {Link} from "react-router-dom";
function BanquetHallCard(props)
{
   const {service}=props;
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
      <img className="card-img-top" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">{service.title}</h5>
      <p className="card-text">{service.description}</p>
      <div className="row">
       <div className="col">Rs.{service.price}<span>(per day)</span></div>
       <div className="col"><Link to={"/product/"+ service._id}>Check it </Link></div>
      </div>
     </div>
   </div>);
}
export default BanquetHallCard;