import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={email,password};
        setUser([...user, data])
        console.log(user);
    }

    return (
        <div className='border border-black'>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label> <br/>
                <input id='email' type='email' placeholder='Email' name='email'  value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/>
                <label htmlFor='password'>Password</label><br/>
                <input id='password' type='password' placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
            </form>

            {user && user.map((item,index)=> <p key={index}>{item.email} {item.password}</p>)}
        </div>
    )
}

export default Login