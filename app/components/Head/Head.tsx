import React from 'react'
import {getData} from '../Api/WebApi'

const Head = async () => {
   const data = await getData();
   console.log(data)
  return (
    <div>
     <p className='text-black'>{data.title}</p>
    </div>
  )
}

export default Head
