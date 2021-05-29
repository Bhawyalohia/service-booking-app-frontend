import React, { useEffect,useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Carousel,Divider,Input,Space} from 'antd';
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
const { TextArea } = Input;
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Product({match})
{
  const serviceId=match.params.slug;
  console.log(serviceId)
  const [service,updateService]=useState(null);
  const [reviews,updateReviews]=useState([]);
  const [rating,updateRating]=useState([]);
  const [review,updateReview]=useState("");
  const {user}=useSelector((state)=>{return state;});
  useEffect(()=>
  {
    axios.get("http://localhost:8000/services/"+serviceId)
    .then((res)=>{console.log(res);
      updateService(res.data);
      updateReviews(res.data.reviews);
      //updateRating(res.data.rating);
    })
    .catch((error)=>{console.log("could not send add to cart request:",error)})
  },[])
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
  function getImages(image)
  {
      return   (<div>
      <img className="d-block w-100" src={image.Location} alt="First slide"/>
      </div>);
  }
  function onChange(e) {
    console.log(e.target.value);
    updateReview(e.target.value);
  }  
  function getReviewCard(review)
  {
     return (<ReviewCard review={review} currentUserId={user._id} removeReview={removeReview}></ReviewCard>)
  }
  function addReview()
  {
     axios.post(`http://localhost:8000/services/addreview`,{service:service,review:review},{
      headers:{
        authtoken:user.idToken
     }
     })
     .then((response)=>
     {
       if(response.data.reviews)
       updateReviews(response.data.reviews);
       console.log(response.data);
     })
     .catch((error)=>
     {
      console.log(error);
     })
  }
  function removeReview(review)
  {
    axios.post(`http://localhost:8000/services/removereview`,{service:service,review:review},{
      headers:{
        authtoken:user.idToken
     }
    })
    .then((response)=>
    {
      if(response.data.reviews)
      updateReviews(response.data.reviews);
      console.log(response.data);
    })
    .catch((error)=>
    {
     console.log(error);
    })
  }
  function getRating()
  {
      return 5;
  }
return (service?(<div className="container">
         <div className="row p-5">
            <div className="col-md-8">
            <Carousel>
              {service.images.map(getImages)}
              </Carousel>
              <div style={{marginTop:"30px"}}>
              <Space direction="vertical">
              <TextArea rows={3} value={review} onChange={onChange} placeholder="Post a review..."/>
              <button className="btn btn-dark btn-lg" onClick={addReview}>Post</button>
              <Divider orientation="left" plain>
              <h6>Reviews from customers</h6>
              </Divider>
              {reviews.map(getReviewCard)}
              </Space>
              </div>
            </div>
            <div className="col-md-4">
            <h1>Rating:{getRating()}</h1>
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
            <li>{service.by.address}</li>
            </ul>
            <button className="btn btn-dark btn-block" onClick={handleAddToCart}>Add To Cart</button>
            </div>
         </div>
      </div>):<div></div>);
}
export default Product;