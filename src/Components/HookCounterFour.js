import React, { useState } from 'react'

function HookCounterFour(){
    const [number,setNumber]=useState([])

    const addItem=()=>{
        setNumber([...number,{
            id:number.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <div>

            <button onClick={addItem}>Add a number</button>
        {
            number.map((item)=><li key={item.id}>{item.value}</li>)
        }
        </div>
    )
}

export default HookCounterFour