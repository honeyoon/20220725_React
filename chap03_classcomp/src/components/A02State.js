// A02State.js
import React, { Component } from 'react'

export class A02State extends Component {
  constructor(){
    super();

    // 값이 변경되면 변경된 값으로 화면 리 렌더링이 이루어진다.
    this.state = {
      name: 'NolBu',
      age: 40,
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }

    this.changeName = this.changeName.bind(this);
    // console.log(this);
  }

  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`;
  };
  changeName(evt) {
    console.log(this);
    // this.state.name = '에러';
    // {...this.state, name: 'BangJa'}
    // this.state => 변수 선언을 위한 내장 객체
    // this.setState() => state 변수를 수정하기 위한 메서드
    this.setState({name: 'BangJa'});
  }

  changeAge = (x) => this.setState({age: x});

  addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    // this.setState({arr: this.state.arr.push(random)});   // Error
    // 새롭게 배열을 생성해서 주소값이 변경되게 해야 한다
    this.setState({arr: this.state.arr.concat(random)});
  }
  updateArray = (index, value) => {
    // this.setState({arr: this.stage.arr[index] = value});
    const newArr = this.state.arr.map((item, i) => index === i ? value : item);
    this.setState({arr: newArr});
  }
  deleteArray = (index) => {
    // this.setState({arr: this.stage.arr.splice(index, 1)});
    const newArr = this.state.arr.filter((item, i) => index !== i);
    this.setState({arr: newArr});
  }

  addObject = (key, value) => {
    const newUser = {...this.state, [key]: value};
    this.setState({user: newUser});
  }
  updateObject = (key, value) => {
    const newUser = {...this.state, [key]: value};
    this.setState({user: newUser});
  }
  deleteObject = key => {
    delete this.state.user[key];
    const newUser = {...this.state.user}
    this.setState({user: newUser});
  }

  

  render() {
    return (
      <div>
        <h3>A02 State Component [변경 가능]</h3>

        <div>
          Name: {this.state.name}<br />
          Age: {this.state.age}<br />
          Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
          User: {this.state.user.name} / {this.state.user.name} / {this.state.user.address} <br />
          onAdd: {this.onAdd(10, 20)}
        </div>
        <br />

        <div>
          { this.state.arr.map((item,index) => <span key={index}>{item}, </span>)}
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={() => this.changeAge(10)}>Age</button>

          <button onClick={this.addArray}>Add Array</button>
          <button onClick={() => this.updateArray(0, 2000)}>Update Array</button>
          <button onClick={() => this.deleteArray(0)}>Delete Array</button>

          <button onClick={() => this.addObject('address', 'Seoul')}>Add Object</button>
          <button onClick={() => this.updateObject('address', 'Busan')}>Update Object</button>
          <button onClick={() => this.deleteObject('address')}>Delete Object</button>

        </div>
      </div>
    )
  }
}

export default A02State
