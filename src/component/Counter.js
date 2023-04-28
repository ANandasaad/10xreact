import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const handleDown=()=>{
        setCount(count-1);
    }
    const handleUp=()=>{
        setCount(count+1);
    }
  return (
    <div>
      {count>0&&<p>{count}</p>} 
     <button onClick={handleUp} >Up</button>
     <button onClick={handleDown}>Down</button>
    </div>
  )
}

export default Counter