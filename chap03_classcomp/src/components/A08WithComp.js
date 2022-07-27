import { Component } from "react";

function A08WithComp(Comp, args) {
  return class A08InnerComp extends Component {
    state = {
      compName: 'A08 InnerComp',
      age: 10,
    }

    changeAge = x => this.setState({age: x});

    render() {
      return (
        <div>
          <h5>{this.state.compName}</h5>
          <div>
            Name: {this.props.name}<br />
            Age: {this.state.age}<br />
            <button onClick={() => this.changeAge(100)}>AGE</button>
          </div>

          <>
            <Comp {...this.props} age={this.state.age} changeAge={this.changeAge} ></Comp>
          </>
        </div>
      )
    }
  }
}
export default A08WithComp;
