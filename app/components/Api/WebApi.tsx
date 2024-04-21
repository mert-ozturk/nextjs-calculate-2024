'use client'
import React from 'react'

export const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",{
        cache:"no-store",
    });
    return res.json()
};

const WebApi = async () => {
    const data = await getData()
    console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default WebApi
