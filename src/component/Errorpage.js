import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {
    const error=useRouteError();
    console.log(error.message);
  return (
    <div>
        <p>Oops Page is Not Found !.....try to use correct path</p>
        <p>{error.status}</p>
    </div>
  )
}

export default Errorpage