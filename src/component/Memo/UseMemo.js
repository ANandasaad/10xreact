import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Button from './Button';
import Page from './Page';


const child=({text})=>{
    let texts=text;
    console.log('render-child')
    return (
        <p>{texts}</p>
    )
}


const UseMemo = () => {
    const [text,setText]=useState('');
    const[input,setInput]=useState('');
    const[dark,setDark]=useState(false);

    const childFuction= useMemo(()=>{child(text)

    },[text]) ;

     
    console.log('render');

    // const a= useMemo(()=>({
    //     test:1
    // }),[]);
    const a={
        test:1
    };
    useEffect(()=>{
        console.log('render-useEffect');
    },[a]);
    const onClick= useCallback(()=>{
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
      <h1>Hello{childFuction}</h1>
    <Page onClick={onClick} value={{a:1,b:2}}/>
      
    </div>
  )
}

export default UseMemo