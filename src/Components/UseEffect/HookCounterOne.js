import React, { useEffect, useState } from 'react'


function HookCounterOne(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logPosition=(e)=>{
        console.log("logPosition");
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log("useEffect");
        window.addEventListener("mousemove",logPosition)
    },[])
    return(
        <div>
            <p>X value:{x}</p>
            <p>Y value:{y}</p>
        </div>
    )
}

export default HookCounterOne