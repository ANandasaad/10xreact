import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';

const Register = () => {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
   
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
      const data={name,phone,email};
      console.log(data);
      addData();
      navigate("/welcome");
     
    }
const addData= async ()=>{
   const options={
    
   }
    
    fetch("http://localhost:3000/welcome",options)

}
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Phone</label>
            <input type='number' placeholder='phone no' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <label>Email</label>
            <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    <Welcome/>
    </div>
  )
}

export default Register