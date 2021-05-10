import React, { useEffect } from "react";
import DjCard from "../components/DjCard";
import CatererCard from "../components/CatererCard";
import BanquetHallCard from "../components/BanquetHallCard";
import { Input,Select,DatePicker} from 'antd';
const {Option}=Select;
const { TextArea } = Input;

function BookService(props)
{
    const {service}=props.location.data;
    //const [formData,updateData]=useEffect();
    function onChange()
    {
       
    }
    function handleChange()
    {

    }
    return <div className="container">
        <div className="row" style={{paddingTop:"10%"}}>
         <div className="col-8">
         <div className="row">
                <div className="col">
                 <h6>Address</h6>                  
                </div>
                <div className="col">
                <TextArea showCount maxLength={100} onChange={onChange} />
                </div>
         </div>
         <div className="row">
                <div className="col">
                <h6>Date</h6>   
                </div>
                <div className="col">
                <DatePicker onChange={onChange} />
                </div>
         </div>
         <div className="row">
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
         </div>
         <button className="btn btn-dark btn-block">Place Order</button>
         </div>
         <div className="col-4">
            {/* <BanquetHallCard></BanquetHallCard> */}
         </div>
        </div>
    </div>
}
export default BookService;
//to={{pathname:"/product",data:{service:service}}}

