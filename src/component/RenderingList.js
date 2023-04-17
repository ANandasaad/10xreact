import React from 'react'
import { getImage, people, peoples } from '../utils/constant'

const RenderingList = () => {
    const list=peoples.map((item)=>(<li key={item}>{item}</li>))
    // const chemist=people.filter(())
    console.log(people);
    const chemist=people.filter((item)=> {
        return item.profession==='chemist';
    })

    
    console.log(chemist);
    const res=chemist.map((m)=>(<li key={m.id}>
        <img src={getImage(m.imageId)}/>
        <p>{m.name}</p>
    </li>))
    console.log(res);
   
  return (
    <>
   
    <div>{list}</div>
    <h1>Filter chemist</h1>
    <h1>{res}</h1>


    </>
    
  )
}

export default RenderingList