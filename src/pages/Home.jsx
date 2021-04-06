import React from "react";
import CatererCard from "../components/CatererCard";
import DjCard from "../components/DjCard";
import BanquetHallCard from "../components/BanquetHallCard";
function Home()
{
    return(
      <div className="container p-5"> 
      <div className="row">
        <div className="col"><CatererCard/></div>
        <div className="col"><DjCard/></div>
        <div className="col"><BanquetHallCard/></div>
      </div>
      </div>
    );
}
export default Home;
