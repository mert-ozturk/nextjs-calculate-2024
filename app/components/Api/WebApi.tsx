'use client'
import axios from 'axios'
import React, { useState } from 'react'

const WebApi = () => {
    const [veri,setVeri] = useState({})
    
const apiURL = "https://jsonplaceholder.typicode.com/users"

const fetchData = () => {
    axios.get(apiURL).then(res=> {
        setVeri(res.data)
        console.log(res.data)
    })
}

  return (
    <div>
      <button onClick={fetchData}>Getir </button>
    </div>
  )
}

export default WebApi
