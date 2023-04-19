import React, { useEffect, useState } from 'react'

const Odd=()=>{
    const[odd,setOdd]=useState(false);
    useEffect(()=>{
       
        return ()=>{
            console.log("Odd is Unmount")
            setOdd(!odd);
        }
    },[])


    return (
        <>
       { odd&&<h1>Odd is Unmount</h1>}
        </>
    )
}

const Even=()=>{
    const [even,setEven]=useState(false);
    useEffect(()=>{
       return ()=>{
        console.log("Even is Unmount");
        setEven(!even);
       }
    },[])

    return (
        <>
        {even &&<h1>Even Unmount</h1>}
        </>
    )
}

const OddEven = () => {
    const[mount,setMount]=useState(false);
   
    
    console.log('render');
 
    
      return (
    <div>
        <button  onClick={()=>setMount(!mount)}>Click Me</button>
     
       {mount?<Even/>:<Odd/>}
    </div>
  )
}

export default OddEven