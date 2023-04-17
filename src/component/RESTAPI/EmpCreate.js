import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const[author,setAuthor]=useState("")
  const navgiate=useNavigate();
  const addData= async()=>{
    const data={id,name,author};
    const options={
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    }
    fetch('http://localhost:8000/employee',options).then((res)=>{
      alert("Send Successully")
      if(res['status']==='ok')
      {
          navgiate('/');
      }
  }).catch((err)=>{
    console.error(err.message);
  })
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const data={id,name,author};
    console.log(data);
    addData();
  }
  return (
    <>
    <div>EmpCreate</div>
    <form onSubmit={handleSubmit}>
    <label>ID</label>
    <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
    <label>Name</label>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <label>Author</label>
    <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    <button type='submit'>Save</button>
    <button><Link to='/'>Back</Link></button>
    </form>
    </>
    
  )
}

export default EmpCreate