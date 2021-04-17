import React, { useEffect } from "react";
import {useSelector} from "react-redux";
import { Carousel,Divider,Input,Space} from 'antd';
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
const { TextArea } = Input;
function onChange(e) {
  console.log(e.target.value);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Product(props)
{
  const {service}=props.location.data;
  const owner=service.by;
  const {user}=useSelector((state)=>{return state;})
  function handleAddToCart()
  {
    axios.post("http://localhost:8000/buyer/addtocart",service,{
      headers:{
         authtoken:user.idToken
      }
    })
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log("could not send add to cart request:",error)})
  }
return (<div className="container">
         <div className="row p-5">
            <div className="col-md-8">
            <Carousel>
              <div>
              <img className="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="First slide"/>
              </div>
              <div>
              <img className="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="First slide"/>
              </div>
              <div>
              <img className="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="First slide"/>
              </div>
              <div>
              <img className="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="First slide"/>
              </div>
              </Carousel>
              <div style={{marginTop:"30px"}}>
              <Space direction="vertical">
              <TextArea rows={3} onChange={onChange} placeholder="Post a review..."/>
              <button className="btn btn-dark btn-lg">Post</button>
              <Divider orientation="left" plain>
              <h6>Reviews from customers</h6>
              </Divider>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              </Space>
              </div>
            </div>
            <div className="col-md-4">
            <h4 style={{padding:"10px"}}>{service.title}</h4>
            <Divider orientation="left" plain>
             <h6>About this</h6>
            </Divider>
                <div style={{paddingLeft:"30px"}}>
                <p>{service.description}</p>
                </div>
            <Divider orientation="left" plain>
             <h6>Price</h6>
            </Divider>
            <ul>
            <li>Rs {service.price} per day.</li>
            </ul>
            <Divider orientation="left" plain>
             <h6>From</h6>
            </Divider>
            <ul>
            <li>{owner.address}</li>
            </ul>
            <button className="btn btn-dark btn-block" onClick={handleAddToCart}>Add To Cart</button>
            </div>
         </div>
      </div>);
}
export default Product;