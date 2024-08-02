import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>count {count}</button>
      </div>
    );
  }
}

export default ClassCounter;
