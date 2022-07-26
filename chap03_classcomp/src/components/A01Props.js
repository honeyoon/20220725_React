// A01Props.js
import React from 'react'
import PropTypes from 'prop-types'

class A01Props extends React.Component {
  constructor() {
    super();        // 기술하지 않으면 에러.
    this.title = 'A01 Props';
  }

  // 변경 안됨. React가 관리하는 변수가 아님
  changeTitle = () => this.title = 'Hello World';

  // 화면 렌더링 작업을 위한 메서드. 반드시 기술되어야 한다
  render() {
    return (
      <div>
        <h3>{this.title} Component - 수정불가[참조만 가능]</h3>

        <div>
          Name: {this.props.name}<br />
          Age: {this.props.age + 100}<br />
          Address: {this.props.add}<br /> {/* 넘기는 key가 변수명이 된다 */}
          {/* undefined는 화면에 표시되지 않는다 */}
          Arr: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[2]}<br />
          User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
          onAdd: {this.props.onAdd(10, 20)}<br />
          isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'}<br />
          dom: {this.props.dom}
          <br />
          전달되지 않은 기본형 값: {this.props.num}<br /> {/* 기본형은 전달되지 않은 값 참조도 에러 아님 */}
          전달되지 않은 참조형 값: {this.props.obj.name}<br />{/* 참조형 값이 없으면 에러 */}
        </div>
        <br />

        <div>
          상위 컴퍼넌트에서 전달한 View가 표시되는 영역<br />
          {this.props.children}
        </div>
        
        <button onClick={this.changeTitle}>Title</button>
      </div>
    )
  }
}
export default A01Props;

// props로 값이 넘어오면 넘어온 값으로 넘어오지 않으면 지정한 기본값 사용
A01Props.defaultProps = {
  name: 'Unknown',
  num: 0,
  obj: {name: 'Unknown'}
}

// props로 넘어오는 타입을 체크. 기본 내장이 아님. import 필요
A01Props.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  add: PropTypes.string,
  arr: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
}