import React, { useState } from 'react';
import ImageItem from "./ImageItem"
import Resizer from "react-image-file-resizer";
import uuid from "react-uuid"
function ImageUpload(props)
{
    let {images,updateImages}=props;
   function handleChange(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            var src =uri;
            var base64str = src.split('base64,')[1];
            var decoded = atob(base64str);
            console.log("FileSize: " + decoded.length);
            if(decoded.length<1024*1024)
            updateImages([...images,{Key:uuid(),Location:uri}]);
            console.log(images);
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
  function removeImage(Key)
  {
    updateImages(images.filter(image=> image.Key !== Key));
  }
  function getImageItem(image)
  {
      return <ImageItem image={image} removeImage={removeImage}></ImageItem>
  }
   return <div>
       {images.map(getImageItem)}
       <input type="file" onChange={handleChange}></input>
   </div>
}
export default ImageUpload;
