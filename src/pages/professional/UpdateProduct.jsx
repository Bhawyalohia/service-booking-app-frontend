import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import axios from "axios";
import {useSelector} from "react-redux"
const { TextArea } = Input;

function UpdateProduct({match})
{
   const {user}=useSelector((state)=>{
     return state;
   });
    const [product,setProduct]=useState({
        _id:"",
        title:"",
        description:"",
        price:""
        //dateOfUnav:[]
    });
    useEffect(()=>
    {
            const serviceId=match.params.slug;
            axios.get(`http://localhost:8000/services/${serviceId}`)
            .then((res)=>{setProduct({...product,
                title:res.data.title,
                description:res.data.description,
                price:res.data.price,
                _id:res.data._id
            })})
            .catch((error)=>{console.log(error)})
        
    },[]);
    function onChange(e)
    {
        const {name,value}=e.target;
         setProduct({...product,[name]:value});
         console.log(product);
    }
    async function handleClick()
    {
          try{
            const result = await axios.post("http://localhost:8000/professional/updateproduct",product,{
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
    return ((<div className="container">
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


                <button className="btn btn-dark btn-block" onClick={handleClick}>Update</button>

                </div>
              </div>
            </div>));
}
export default UpdateProduct;