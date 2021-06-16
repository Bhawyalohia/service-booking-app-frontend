import React, { useState } from "react";
import { Input, Upload } from 'antd';
import axios from "axios";
import {useSelector} from "react-redux"
import ImageUpload from "../../components/ImageUpload";
const { TextArea } = Input;

function AddProduct()
{
   const {user}=useSelector((state)=>{
     return state;
   });
    const [product,setProduct]=useState({
        title:"",
        description:"",
        price:""
    });
    const [images,updateImages]=useState([]);
    function onChange(e)
    {
        const {name,value}=e.target;
         setProduct({...product,[name]:value});
         console.log(product);
    }
    async function handleClick()
    {
      console.log(images);
          try{
            const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/professional/createproduct`,{...product,images:images},{
            headers: {
              authtoken : user.idToken
            }
            });
             console.log(result);
          }
          catch(error)
          {
            console.log(error);
          }
    }
    return (<div className="container">
              <div className="row">
                <div className="col-6 offset-3" >
               
                <div  className="row" style={{paddingTop:"40px"}}>
                <div className="col-4">
                <h6>title</h6>
                </div>
                <div className="col-8">
                <TextArea showCount maxLength={30} onChange={onChange} name="title" value={product.title}/>
                </div>
                </div>


                <div  className="row" style={{paddingTop:"40px"}}>
                <div className="col-4">
                <h6>Description</h6>
                </div>
                <div className="col-8">
                <TextArea showCount maxLength={100} onChange={onChange} name="description" value={product.description}/>
                </div>
                </div>


                <div  className="row" style={{paddingTop:"40px",paddingBottom:"40px"}}>
                <div className="col-4">
                <h6>Price</h6>
                </div>
                <div className="col-8">
                <Input name="price" value={product.price} onChange={onChange}></Input>
                </div>
                </div>

                <div className="row" style={{paddingTop:"40px",paddingBottom:"40px"}}>
                  <div className="col-4">
                  <h6>Upload Images</h6>
                  </div>
                  <div className="col-8">
                  <ImageUpload images={images} updateImages={updateImages}></ImageUpload>
                  </div>
                </div>
                <button className="btn btn-dark btn-block" onClick={handleClick}>Add</button>

                </div>
              </div>
            </div>);
}
export default AddProduct;