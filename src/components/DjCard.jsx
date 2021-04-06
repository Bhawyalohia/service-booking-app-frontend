import React  from "react";
function DjCard()
{
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
      <img className="card-img-top" src="https://preview.free3d.com/img/2019/03/2408221476009281469/56jv1cw5-900.jpg" alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and ...</p>
      <div className="row">
            <div className="col">Rs.500</div>
            <div className="col"><a href="#">Check it</a></div>
        </div>
     </div>
   </div>);
}
export default DjCard;