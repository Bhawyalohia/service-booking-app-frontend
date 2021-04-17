import axios from "axios";
import React, { useEffect, useState } from "react";
import CatererCard from "../components/CatererCard"
function CateringServices()
{
   const [services,updateServices]=useState([]);
   useEffect(()=>
   {
      axios.get("http://localhost:8000/services/cateringservices")
      .then((result)=>
      {
          updateServices(result.data);
      })
      .catch((error)=>{console.log(error)})
   },[])
   function getCard(service)
   {
       return <div className="col-4"><CatererCard service={service}></CatererCard></div>
   }
   return <div className="container">
     <div className="row p-5">
        {services.map(getCard)}
     </div>
   </div>
}
export default CateringServices;