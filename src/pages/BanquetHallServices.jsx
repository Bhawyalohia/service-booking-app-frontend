import axios from "axios";
import React, { useEffect, useState } from "react";
import BanquetHallCard from "../components/BanquetHallCard";
function BanquetHallServices()
{
   const [services,updateServices]=useState([]);
   useEffect(()=>
   {
      axios.get("http://localhost:8000/services/hallservices")
      .then((result)=>
      {
          updateServices(result.data);
      })
      .catch((error)=>{console.log(error)})
   },[])
   function getCard(service)
   {
       return <div className="col-4"><BanquetHallCard service={service}></BanquetHallCard></div>
   }
   return <div className="container">
     <div className="row p-5">
        {services.map(getCard)}
     </div>
   </div>
}
export default BanquetHallServices;