import React, { useEffect, useState } from 'react'

function HookCounterTwo(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const mouseLogPosition=(e)=>{
        console.log("mouseLogPosition");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect");
        window.addEventListener("mousemove",mouseLogPosition)

      return()=>{
        window.removeEventListener("mousemove",mouseLogPosition)
      }
    },[])
    return(
        <div>
            <p>X value:{x}</p>
            <p>Y value:{y}</p>
        </div>
    )
}

export default HookCounterTwo