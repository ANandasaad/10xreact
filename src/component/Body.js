import React from 'react'
import { Outlet } from 'react-router-dom'
import RestApi from './RESTAPI/RestApi'
import Register from './Register'
import NewTodoList from './NewTodoList'
import OddEven from './OddEven'
import ObjectUpdate from './UpdatingNestedObject/ObjectUpdate'
import Nested from './UpdatingNestedObject/Nested'
import UseMemo from './Memo/UseMemo'

const Body = () => {
  return (
    <>
 
  
 {/* <NewTodoList/> */}
 {/* <OddEven/> */}
 {/* <ObjectUpdate/> */}
 {/* <Nested/> */}
 <UseMemo/>


    </>
  )
  
}

export default Body