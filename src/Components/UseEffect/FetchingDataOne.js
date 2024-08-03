import axios from 'axios';
import React, {useEffect, useState } from 'react'


function FetchingDataOne(){
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPost(res.data)
            
        })
        .catch(error=>error)
    },[])
    return(
        <div>
            {
                post.map((post)=><ul key={post.id}><li>{post.title}</li></ul>)
            }
        </div>
    )
}

export default FetchingDataOne