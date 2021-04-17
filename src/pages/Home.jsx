import React from "react";
import CatererCard from "../components/CatererCard";
import DjCard from "../components/DjCard";
import BanquetHallCard from "../components/BanquetHallCard";
import Product from "./product";
import ProfessionalProducts from "./professional/ProfessionalProducts";
import AddProduct from "./professional/AddProduct";
import BookService from "./BookService";
import {Link} from "react-router-dom"
function Home()
{
    return(
      <div>
      <Link to="/catering-services">Catering Services</Link>
      <br/>
      <Link to="/banquet-hall-services">Banquet Hall Services</Link>
      <br/>
      <Link to="/dj-services">Dj Services</Link>
      <br/>
      </div>
    );
}
export default Home;
