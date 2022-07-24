import React, { Component } from "react";

class A05LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      color: "green",
    };
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 getDrivedStateFromProps');
    return true
  }

  changeColor = () => {
    this.setState({ color: "orange" });
  };

  render() {
    console.log("3. Render");
    return (
      <div>
        <h3>A05 Life Cycle</h3>
        color: {this.state.color}
        <br />
        <button onClick={this.changeColor}>Click</button>
      </div>
    );
  }
}
export default A05LifeCycle;
