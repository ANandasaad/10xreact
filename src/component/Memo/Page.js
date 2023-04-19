import React, { memo } from 'react'
const Page = memo( function Page (){
    console.log('page memo');
  return (
    <div>Page</div>
  )
})

export default Page