import React, { useEffect, useState } from "react";
import DjCard from "../components/DjCard";
import CatererCard from "../components/CatererCard";
import BanquetHallCard from "../components/BanquetHallCard";
import { Input,Select,DatePicker} from 'antd';
import axios from "axios";
import { useSelector } from "react-redux";
const {Option}=Select;
const { TextArea } = Input;

function BookService({match})
{
    const serviceId=match.params.slug;
    const {user}=useSelector((state)=>{return state})
    const [formData,updateData]=useState({
           address:"",
           date:""
    });
    function handlePlaceOrder()
    {
       console.log(serviceId);
        axios.post("http://localhost:8000/orders/createorder",{...formData,serviceId:serviceId},{
              headers:{
                     authtoken:user.idToken
                   }
        })
        .then((res)=>
        {
             console.log(res.data);
        })     
        .catch((err)=>{console.log(err)})
    }
    function onChange(event)
    {
       updateData({...formData,[event.target.name]:event.target.value});
       console.log(event.target.value);
    }
    return <div className="container">
        <div className="row" style={{paddingTop:"10%"}}>
         <div className="col-8">
         <div className="row">
                <div className="col">
                 <h6>Address</h6>                  
                </div>
                <div className="col">
                <TextArea showCount maxLength={100}  name="address" value={formData.address} onChange={onChange} />
                </div>
         </div>
         <div className="row">
                <div className="col">
                <h6>Date</h6>   
                </div>
                <div className="col">
                <input type="date" name ="date" value={formData.date} onChange={onChange} />
                </div>
         </div>
         {/* <div className="row">
                <div className="col">
                <h6>Payment Method</h6>   
                </div>
                <div className="col">
                <Select  style={{ width: "100%" }} onChange={handleChange}>
                <Option value="Credit card">Credit card</Option>
                <Option value="Debit card">Debit card</Option>
                <Option value="Cash on delivery">Cash on delivery</Option>
                </Select>
                </div>
         </div> */}
         <button className="btn btn-dark btn-block" onClick={handlePlaceOrder}>Place Order</button>
         </div>
         <div className="col-4">
            {/* <BanquetHallCard></BanquetHallCard> */}
         </div>
        </div>
    </div>
}
export default BookService;
//to={{pathname:"/product",data:{service:service}}}

