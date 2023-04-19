import React, { useState } from 'react'
import { useImmer } from 'use-immer';

const Nested = () => {
    const [object,setObject]=useState({
        name:'',
        lastname:'',
        city:{
            cityname:'',
            citycode:''
        }
    });
    const[data,setData]=useState('');
    const [person,setPerson]=useImmer({
        name:'anand',
        city:{
            cityname:'ghazipur',
            citycode:1222,
        }
    })
    


    const handleChange=(e)=>{
         setObject({...object,[e.target.name]:e.target.value});
    }
    const handleChangeCityname=(e)=>{
         setObject({
            ...object,
            city:{
                ...object.city,
                cityname:e.target.value,
            }
         })
    }
    const handleChangeCitycode=(e)=>{
        setObject({
            ...object,
            city:{
                ...object.city,
                citycode:e.target.value,
            }
        })
    }

    // console.log(object);

    const handleNameChange=(e)=>{
        setPerson(draft=>{
            draft.name=e.target.value;
        })

    }
    const handleChangeCityN=(e)=>{
        setPerson(draft=>{
            draft.city.cityname=e.target.value;
        })
    }
    const handleChangeCityC=(e)=>{
        setPerson(draft=>{
            draft.city.citycode=e.target.value;
        })
    }
    console.log(person);

    const handlePerson=e=>{
        e.preventDefault();
      console.log(person);
    }
  return (
    <div>
        {/* <label>Name</label>
        <input name='name' value={object.name} onChange={handleChange}/><br/>
        <labe>Last Name</labe>
        <input name='lastname' value={object.lastname} onChange={handleChange}/><br/>
        <label>CityName</label>
        <input name='cityname' value={object.city.cityname} onChange={handleChangeCityname}/>
        <label>CityCode</label>
        <input type='number' value={object.city.citycode} onChange={handleChangeCitycode}/> */}
        <form onSubmit={handlePerson}>
        <label>Name</label>
        <input name='name' value={person.name} onChange={handleNameChange}/><br/>
        <label>CityName</label>
        <input name='cityname' value={person.city.cityname} onChange={handleChangeCityN}/>
        <label>CityCode</label>
        <input type='number' value={person.city.citycode} onChange={handleChangeCityC}/>
        <button type='submit'>Click me</button>
        </form>
    </div>
  )
}

export default Nested