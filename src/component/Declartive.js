import React, { useState } from 'react'

const Declartive = () => {

    const [answer,setAnswer]=useState('');
    const[error,setError]=useState(null);
    const[status,setStatus]=useState('typing');

    if(status==='success')
    {
        return <h1>Yeah , that's right</h1>
    }
    const handleChange=(e)=>{
        setAnswer(e.target.value);
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setStatus('submiting');
        try{
             await submitAnswer(answer);
             setStatus('success');
        }
        catch(error){
            console.log(error.message);
            alert(error.message);
            setError(error);
            setStatus('tyrping');
        }
    }

    const submitAnswer=(answer)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              let shouldError=answer.toLowerCase()!=='varansi';
              if(shouldError){
                reject( new Error("Good guess, but its wrong, Try again"));
              }
              else{
                resolve();
              }
            },1000)
        });
    }
  return (
    <>
      <h1>City Quiz</h1> 
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p> 
      <form onSubmit={handleSubmit}>
        <textarea disabled={status==='submitting'} value={answer} onChange={handleChange}/>
        <br/>
        <button type='submit' disabled={answer.length==0 || status==='submitting'}>Submit</button>
        {error!==null && <p>{error.message}</p>}
      </form>
    </>
  )
}

export default Declartive