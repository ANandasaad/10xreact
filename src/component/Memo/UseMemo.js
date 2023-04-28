import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Button from './Button';
import Page from './Page';



const Child=({text})=>{

     const childFuction=useMemo(()=>{
       console.log("re-render child");
     },[text]);

     return childFuction;
}
const UseMemo = () => {
    const [text,setText]=useState('');
    const[input,setInput]=useState('');
    const[dark,setDark]=useState(false);

    // const childFuction= useMemo(()=>{child(text)

    // },[text]) ;

     
    console.log('render');

    // const a= useMemo(()=>({
    //     test:1
    // }),[]);
    const a={/// it will alway created new memory location and it will value of a from its after creation and it be not same that why it will re-render
        test:1
    };
    useEffect(()=>{
        console.log('render-useEffect');
    },[a]);


    const onClick= useCallback(()=>{// same behavour for these also...even if 
        console.log('Do something');
    },[])
  return (
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <label>
            <input type='checkbox' checked={dark} onChange={(e)=>setDark(e.target.checked)}/>
            Dark
        </label>
        <p>{input}</p>
        {/* <Button input={input}>
             hello
        </Button> */}
      <Child  text={text}/>
    <Page onClick={onClick} value={{a:1,b:2}}/>{/* even if memo the compontent it render if we add some attribute or pass new props*/}
      
    </div>
  )
}

export default UseMemo