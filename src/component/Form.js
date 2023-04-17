

import React, { useState } from 'react'

const Form = () => {
    const [values,setValues]=useState({
        company:'',
        name:'',
       version:'',
       level:'',
      

    })
   const handleInput=(e)=>{
    const {name,value}=e.target;
     
    setValues({...values,[name]:value});
    console.log(e.target.checked);
    console.log(e.target.value);
    console.log(e.target.name);
  

   }
   const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(values);
    

   }
   console.log()
  return (
    <form onSubmit={handlesubmit
    
    }>
        <label htmlFor='company'> Company
    <input type='text' name='company' value={values.company} onChange={handleInput} /></label>
    <label htmlFor='name'>Name
    <input  type='text' name='name' value={values.name} onChange={handleInput}/></label>


    <label>
        Favorite version
        <select name='version' onChange={handleInput} value={values.version}>
            <option value='123.34'>v123.34</option>
            <option value='145.5'>v145.5</option>
            <option value='156.6'>v156.6</option>
            <option value='176.7'>v176.7</option>
        </select>
       <input type='radio' value='acolyte' name='level' checked={values.level=='acolyte'} onChange={handleInput} /> 
       <input type='radio' value='master' name='level' checked={values.level=='master'} onChange={handleInput}/> 
       <input type='radio' value='King' name='level' checked={values.level=='King'} onChange={handleInput}/> 

    </label>

   

    <button type='submit'>Submit</button>
    </form>
  )
}

export default Form