import React, { Component } from "react";
import A08WithComp from './A08WithComp'

class A08HigherOrderComp extends Component {
  render() {
    return (
      <div>
        <h3>A08 Higher Order Component</h3>
        props.name: {this.props.name}<br />
        Age: {this.props.age}<br />
        <button onClick={() => this.props.changeAge(200)}>AGE</button>
      </div>
    );
  }
}
export default A08WithComp(A08HigherOrderComp);
