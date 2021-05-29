import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
function ImageItem({image,removeImage})
{
    function handleClick()
    {
        removeImage(image.Key);
    }
   return <div>
       <img src={image.Location} style={{height:"50px", width:"50px"}}></img>
       <br></br>
       <DeleteOutlined onClick={handleClick}/>
   </div>
}
export default ImageItem;