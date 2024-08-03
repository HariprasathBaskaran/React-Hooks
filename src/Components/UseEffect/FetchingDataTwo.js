import axios from 'axios';
import React, {useEffect, useState } from 'react'


function FetchingDataTwo(){
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
            
        })
        .catch(error=>error)
    },[idFromButtonClick    ])

    const clickHandler=()=>{
        setIdFromButtonClick(id)
    }
    return(
        <div>
            <input type='text' value={id}  onChange={e=>setId(e.target.value)}/>
            <div>{post.title}</div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FetchingDataTwo