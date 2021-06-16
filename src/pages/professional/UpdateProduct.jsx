import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import axios from "axios";
import {useSelector} from "react-redux"
import ImageUpload from "../../components/ImageUpload";
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
    });
    const [images,updateImages]=useState([]);
    useEffect(()=>
    {
            const serviceId=match.params.slug;
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/services/${serviceId}`)
            .then((res)=>{setProduct({...product,
                title:res.data.title,
                description:res.data.description,
                price:res.data.price,
                _id:res.data._id
            }
            )
            updateImages(res.data.images);
            //console.log
          })
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
            const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/professional/updateproduct`,{...product,images},{
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

                <div className="row" style={{paddingTop:"40px",paddingBottom:"40px"}}>
                  <div className="col-4">
                  <h6>Upload Images</h6>
                  </div>
                  <div className="col-8">
                  <ImageUpload images={images} updateImages={updateImages}></ImageUpload>
                  </div>
                </div>

                <button className="btn btn-dark btn-block" onClick={handleClick}>Update</button>

                </div>
              </div>
            </div>));
}
export default UpdateProduct;