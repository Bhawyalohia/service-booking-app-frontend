import React  from "react";
function BanquetHallCard()
{
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
      <img className="card-img-top" src="https://www.joonsquare.com/usermanage/image/business/the-grand-panipat-4613/the-grand-panipat-the-grand-01.jpg" alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and ...</p>
      <div className="row">
            <div className="col">Rs.500 <span>(per day)</span></div>
            <div className="col"><a href="#">Check it</a></div>
        </div>
     </div>
   </div>);
}
export default BanquetHallCard;