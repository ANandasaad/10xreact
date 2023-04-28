import React, { useState } from 'react'

const FormSubmit = () => {
    const [answer,setAnswer]=useState('');
    const[err,setError]=useState(null);
    const[status,setStatus]=useState('typing');
    if(status==='success')
    {
        return <h1>Thank God Ur Right !</h1>
    }
    const handleChange=(e)=>{
        setAnswer(e.target.value);
    }   
  const handleSubmit= async(e)=>{
     e.preventDefault();
     setStatus('submitting');
     try{
        await handleData(answer);
        setStatus('success');

     }
     catch(err){
        console.log(err.message);
        setStatus('typing');
        setError(err);

     }
  }
  const handleData=(answer)=>{

    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            let ans=answer.toLowerCase()!=='delhi';
            if(ans)
            {
                reject(new Error('Good But Ur Wrong'));
            }else{
                resolve();
            }
       },1000)
    });
    
  };
  return (
    <div>
        <h1>Form Details - Guess city</h1>
        <form onSubmit={handleSubmit}>
        
        <textarea value={answer} onChange={handleChange} disabled={status==='submitting'} /> <br/>
        <button disabled={status==='submitting' || answer.length===0}>Submit</button>
        {err!=null &&<p>{err.message}</p>}
        </form>

    </div>
  )

 
}

export default FormSubmit