import React from "react";
import {useSelector} from "react-redux";
import { Carousel,Divider } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
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
            <Carousel afterChange={onChange}>
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
              
            </div>
            <div className="col-md-4">
            <h4 style={{padding:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi</h4>
            <Divider orientation="left" plain>
             <h6>About this</h6>
            </Divider>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</li>
            </ul>
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
            <button className="btn btn-dark btn-block">Book service</button>
            </div>
         </div>
      </div>);
}
export default Product;

{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="First slide"/>
      </div>
      <div class="carousel-item">
       <img class="d-block w-100" src="https://preview.free3d.com/img/2019/03/2408221476009281469/56jv1cw5-900.jpg" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="Third slide"/>
      </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div> */}