import React, { PureComponent } from "react";

// 기본형의 값이 동일한 값으로 변경되면 shouldComponentDidUpdate()가 return false로 
// 구현되어 있는 클래스
class A06PureComponent extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "NolBu",
      ary: ["React", "Angular", "Vue"],
    };
  }

  changeName = () => this.setState({ name: "NolBu" });
  changeObject = () => this.setState({ ary: ["React", "Angular", "Vue"] });

  // PureComponent이 이 메서드가 이미 정의되어 있는 상태라 재 정의할 수 없다. 적으면 에러
  /*
  shouldComponentUpdate(props, state) {
    return true;
  }
  */

  render() {
    console.log("---------- render() Method ----------");
    return (
      <div>
        <h3>A06 PureComponent</h3>

        <div>
          Name: {this.state.name} <br />
          Ary: {this.state.ary[0]}
          <br />
          <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
          <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
        </div>
      </div>
    );
  }
}
export default A06PureComponent;
