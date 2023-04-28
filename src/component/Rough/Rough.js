import React, { useState } from 'react'

const Rough = () => {
    const [person,setPerson]=useState({
        name:'',
        age:'',
        email:'',
        
        city:{
            cityname:'',
            citycode:''
        }}
    )
    const[data,setData]=useState([]);


    const handleChange=(e)=>{
        setPerson({...person,name:e.target.value})
       
       
    }
    const handleAge=(e)=>{
        setPerson({...person,age:e.target.value});
       
    }
    const handleEmail=(e)=>{
        setPerson({...person,email:e.target.value})
       
    }
    const handleName=(e)=>{
        setPerson({...person,city:{
            ...person.city,cityname:e.target.value
        }})
      

    }
    const handleCode=(e)=>{
        setPerson({...person,city:{
            ...person.city,citycode:e.target.value
        }})
        
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        setData((prev)=>[...prev,person]);
        

       
    }
    console.log(person);
    console.log(data);

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name:
            <input value={person.name} name='name' onChange={handleChange}/>
         
        </label><br/>
        <label>
            Age:
            <input value={person.age} name='age' onChange={handleAge}/>

        </label><br/>
        <label>
            Email:
            <input value={person.email} name='email' onChange={handleEmail}/>
        </label><br/>
        <h1>City:</h1>
        <label>
            
            <label>
                City Name:
                <input value={person.city.cityname} name='cityname' onChange={handleName}/>

            </label><br/>
            <label>
                City Code:
                <input value={person.city.citycode} name='citycode' onChange={handleCode}/>
            </label>
        </label>
        <button type='submit'>Submit</button>

        <>
        {data.map((item)=>(<div key={item}>
            <ul>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
                <li>{item.city.cityname}</li>
                <li>{item.city.citycode}</li>
            </ul>
        </div>))}
        </>
    </form>
  )
}

export default Rough