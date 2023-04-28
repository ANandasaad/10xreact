import React, { useState } from 'react'

const Selection = ({applyColor,item}) => {
    const [style,setStyle]=useState({background:''})
    const handleClick=()=>{
        const color=applyColor();
        setStyle({background:color});
    }
  return (
    <div style={{width:'200px', height:'200px', border:'1px solid black'}} onClick={handleClick}>selection</div>
  )
}

export default Selection