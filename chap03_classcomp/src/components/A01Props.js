// A01Props.js
import React from 'react'

class A01Props extends React.Component {
  constructor() {
    super();        // 기술하지 않으면 에러.
    this.title = 'A01 Props';
  }

  changeTitle = () => this.title = 'Hello World';

  // 화면 렌더링 작업을 위한 메서드. 반드시 기술되어야 한다
  render() {
    return (
      <div>
        <h3>{this.title} Component</h3>
        
        <button onClick={this.changeTitle}>Title</button>
      </div>
    )
  }
}
export default A01Props;
