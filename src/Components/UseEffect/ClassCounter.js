import React, { Component } from 'react'


class ClassCounter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:""
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }

    componentDidUpdate(prevprops,prevstate){

        if(this.state.count !== prevstate.count){
            console.log("componentDidUpdate");
            document.title=`clicked ${this.state.count} times`
        }   
    }

    changeHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    nameHandler=(e)=>{
 this.setState({
    name:e.target.value
 })
    }
    render(){
        return(
            <div>
                <button onClick={this.changeHandler}>clicked {this.state.count} times</button>
                <input type='text' value={this.state.name} onChange={this.nameHandler} />
            </div>
        )
    }
}

export default ClassCounter