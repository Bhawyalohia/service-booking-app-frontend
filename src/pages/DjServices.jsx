import axios from "axios";
import React, { useEffect, useState } from "react";
import DjCard from "../components/DjCard"

function DjServices()
{
  const [services,updateServices]=useState([]);
  useEffect(()=>
  {
     axios.get(`${process.env.REACT_APP_BACKEND_URL}/services/djservices`)
     .then((result)=>
     {
         updateServices(result.data);
     })
     .catch((error)=>{console.log(error)})
  },[])
  function getCard(service)
  {
      return <div className="col-4"><DjCard service={service}></DjCard></div>
  }
  return <div className="container">
    <div className="row p-5">
       {services.map(getCard)}
    </div>
  </div>
}
export default DjServices;