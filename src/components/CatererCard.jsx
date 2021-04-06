import React  from "react";
function CatererCard()
{
   return (<div className="card border-light mb-3 " style={{width: "18rem",fontSize:"small"}}>
      <img className="card-img-top" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and ...</p>
      <div className="row">
            <div className="col">500 <span>(per plate)</span></div>
            <div className="col"><a href="#">Check it</a></div>
        </div>
     </div>
   </div>);
}
export default CatererCard;