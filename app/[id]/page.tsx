import React from 'react'

export const getAllPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res.json()
    
}

export const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return res.json()
    
}

 async function BlogPage ({params}) {
    console.log("Inside the page",params.id)
    const data = await getSinglePost(params.id)


return(
    <>
        <h1>Title: {data.title}</h1>
    
    </>
)
 }

 export default BlogPage
 
 