import React from "react";
import {useSelector} from "react-redux";
import { Carousel,Divider,Input,Space} from 'antd';
import ReviewCard from "../components/ReviewCard";
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
function Product()
{
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
            <h4 style={{padding:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi</h4>
            <Divider orientation="left" plain>
             <h6>About this</h6>
            </Divider>
                <div style={{paddingLeft:"30px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                </div>
            <Divider orientation="left" plain>
             <h6>Price</h6>
            </Divider>
            <ul>
            <li>Rs 500 per day.</li>
            </ul>
            <Divider orientation="left" plain>
             <h6>From</h6>
            </Divider>
            <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
            </ul>
            <button className="btn btn-dark btn-block">Add To Cart</button>
            </div>
         </div>
      </div>);
}
export default Product;