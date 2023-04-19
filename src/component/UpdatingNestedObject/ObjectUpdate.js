import React, { useState } from 'react'

const ObjectUpdate = () => {
    const [object,setObject]=useState({
        firstName:'anansd',
        LastName:'asdasda',
        Email:'adasdas'
    })
    

    const handleChange=(e)=>{
           setObject({...object,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
           e.preventDefault();
           console.log(object);


    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name</label>
        <input type='text' name='firstName'  value={object.firstName} onChange={handleChange}  /><br/>
        <label htmlFor='lastname' >LastName</label>
        <input  type='text' name='LastName' value={object.LastName} onChange={handleChange}/><br/>
        <label htmlFor='email'>Email</label>
        <input type='text' name='Email' value={object.Email} onChange={handleChange}/>
   
       <p>{object.firstName}</p>
       <p>{object.LastName}</p>
       <p>{object.Email}</p>
       <button type='submit'>Click</button>
       </form>
    </div>
  )
}

export default ObjectUpdate