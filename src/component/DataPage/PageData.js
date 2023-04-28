import React, { useEffect, useState } from 'react'
import json from './data.json';
const PageData = () => {
    const [data,setData]=useState({});

    useEffect(()=>{
      setData(json);
    },[data]);
   console.log(data);
  return (
    <div></div>
  )
}

export default PageData;