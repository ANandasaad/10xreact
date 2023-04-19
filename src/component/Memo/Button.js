import React from 'react'

const Button = ({input,children}) => {
  return (
    <div><button >{children}{input}</button>

    </div>
  )
}

export default Button