import React, { useState } from 'react'

const PostAPI = ({setPost}) => {
    const [body,setBody]=useState('');
    const [title,setTitle]=useState('');

const addPost= async ({title,body})=>{
    let option={
       method:'POST',
       body:JSON.stringify({
        title:title,
        body:body,
        userId:Math.random().toString(36).slice(2),

       }),
       headers:{
        'Content-type':'application/son; charset=UTF-8',
       },
    }
    await fetch('https://jsonplaceholder.typicode.com/posts',option).then((response)=>response.json()).then((data)=>{
        
    console.log(data)
    setPost((prev)=>[data,...prev]);
    setBody('');
    setTitle('');

}).catch((err)=>{
    console.log(err.message);
})


};



    const handleSubmit=(e)=>{
        e.preventDefault();
        addPost(title,body);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea type='text' value={body} onChange={(e)=>{setBody(e.target.value)}}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default PostAPI