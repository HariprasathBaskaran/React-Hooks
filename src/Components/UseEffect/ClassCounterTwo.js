import React, { Component } from 'react'


class ClassCounterTwo extends Component{
    constructor(){
        super()
        this.state={
            x:0,
            y:0,
            display:true
        }

    }

    logMousePosition=e=>{
        console.log("logMousePosition");
        
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
      window.addEventListener("mousemove",this.logMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener("mouseMoveRemove",this.logMousePosition)
    }
    render(){
        const {x,y}=this.state
        return(
            <div>
                <p>X value:{x}</p>
                <p>Y value:{y}</p>
            </div>
        )
    }
}

export default ClassCounterTwo