import React, { Component } from 'react'

class ClassCoutnerOne extends Component{
    constructor(){
        super()
        this.state={
            x:0,
            y:0
        }
    }

    logPosition=(e)=>{        
        this.setState({x:e.clientX,y:e.clientY})
    }
    
    componentDidMount(){
    window.addEventListener("mousemove",this.logPosition)
    }
    render(){
        const {x,y}=this.state
        return(
            <div>
                <p>X value: {x}</p>
                <p>Y value: {y}</p>
            </div>
        )
    }
}

export default ClassCoutnerOne