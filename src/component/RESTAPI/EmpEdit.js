import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EmpEdit = () => {
  const {emp}=useParams();
 
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const[author,setAuthor]=useState("")
  const navgiate=useNavigate();
    useEffect(() => {
      getdata();
    }, []);
    async function getdata() {
      fetch("http://localhost:8000/employee/"+emp)
        .then((response) => response.json())
        .then((data) => {
             setId(data.id)
             setAuthor(data.author);
             setName(data.name);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  

  const addData= async()=>{
    const data={emp,id,name,author};
    const options={
      method:'PUT',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    }
    fetch('http://localhost:8000/employee/'+emp,options).then((res)=>{
      alert("Send Successully")
      
      
          navgiate('/');
      
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
    <div>EmpEDit</div>
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

export default EmpEdit