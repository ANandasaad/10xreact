import React from 'react'
import { people } from '../utils/constant'

const SplitRender = () => {
    const chemist=people.filter(list=>list.profession==='chemist');
    const everyone=people.filter(list=>list.profession!=='chemist');
    const res1=chemist.map((m)=>(<li key={m.id}>{m.name}</li>))
    const res2=everyone.map((m)=>(<li key={m.id}>{m.name}</li>))

  return (
    <div>
        <h1>Chemist</h1>
        <li>{res1}</li>
        <h1>everyone</h1>
        <li>{res2}</li>
    </div>
  )
}

export default SplitRender