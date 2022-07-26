import React, { Component } from "react";

class A05LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      color: "green",
    };
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {   // VDOM
    // console.log(props);
    if (props.check) {
      state.name = 'ADD Name';
      state.color = props.color;
    }
    console.log('2 getDrivedStateFromProps');
    return state;
  }

  changeColor = () => {
    this.setState({ color: "orange" });
  };

  componentDidMount() {
    // 화면 렌더링이 완료된 시점.
    // Ajax 요청 => 화면에 출력하는 작업
    console.log('4 componentDidMount')
  }

  shouldComponentUpdate(props, state) {
    // 값이 update 되기 전에 발생
    console.log('5 shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('6 componentDidUpdate')
  }

  render() {
    console.log("3. Render");
    // console.log(this.state);
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
