import React from 'react'

export const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res.json()
    
}

 

const WebApi = async () => {
 
    const data = await getData()
    console.log(data)

  return (
    <div>
      <p className='text-black'>{data.title}</p>
    </div>
  )
}

export default WebApi