import React, { useEffect, useState } from 'react'

const ImagePost = () => {
  const [images,setImages]=useState([]);
  const [imageUrl,setImageUrl] =useState([]);

  useEffect(()=>{
     if(images.length<1)return;
     const newImageUrl=[];
     images.forEach(img => {
      newImageUrl.push(URL.createObjectURL(img));
      setImageUrl(newImageUrl);
     });
  },[images])

  const handleChnage=(e)=>{
    setImages([...e.target.files]);
  }
  return (
    <div>
      <input type='file' multiple accept='image/*' onChange={handleChnage}/>
      {imageUrl.map((img)=><img src={img}/>)}
    </div>
  )
}

export default ImagePost;