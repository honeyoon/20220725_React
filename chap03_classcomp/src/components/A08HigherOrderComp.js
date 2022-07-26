import React, { Component } from "react";

class A08HigherOrderComp extends Component {
  render() {
    return (
      <div>
        <h3>A08 Higher Order Component</h3>
        props.name: {this.props.name}
      </div>
    );
  }
}
export default A08HigherOrderComp;
