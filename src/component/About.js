import React from 'react'
import { Form, Outlet } from 'react-router-dom'
import FormSubmit from './FormSubmit/FormSubmit'

const About = () => {
  return (
    <div>
        <FormSubmit/>
        <Outlet/>
        
    </div>
  )
}

export default About