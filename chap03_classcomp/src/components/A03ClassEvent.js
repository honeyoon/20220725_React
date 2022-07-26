import React, { Component } from 'react'

class A03ClassEvent extends Component {

  // constructor 바깥쪽에 독립적으로 선언해서도 사용 가능
  state = {
    name: 'NolBu',
    age: 30,
    date: '2030-12-25',
    sports: 'soccer',
    language: ['Vue'],
    isChecked: false,
    baseball: 'NC',
    four: [],
  };

  // changeName = evt => this.setState({name: evt.target.value});
  // changeDate = evt => this.setState({date: evt.target.value});
  changeString = evt => this.setState({[evt.target.name]: evt.target.value});
  changeNumber = evt => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    this.setState({[evt.target.name]: value});
  };
  changeCheck = evt => this.setState({[evt.target.name]: !this.state[evt.target.name]})
  changeLanguage = evt => {
    const value = evt.target.value;
    if (this.state.language.includes(value)) {
      const newLang = this.state.language.filter(item => item !== value);
      this.setState({language: newLang});
    } else {
      this.setState({language: this.state.language.concat(value)});
    }
  }
  changeOptions = evt => {
    const elem = Array.from(evt.target.selectedOptions);    // 유사배열 => 배열
    const elemValue = elem.map(item => item.value)
    // console.log(elem);
    this.setState({four: elemValue})
  }

  sendData = evt => {
    // DOM이 가지고 있는 기본 기능을 취소
    evt.preventDefault();

    // ajax 전송
    console.log(this.state);
  }
  
    
  render() {
    return (
      <div>
        <h3>A03 Class Component Event & Form</h3>

        <form>
          Name: {this.state.name}
            <input type="text" name="name" className="form-control"
              defaultValue={this.state.name} onChange={this.changeString} />
          Age: {this.state.age + 100} 
            <input type="text" name="age" className="form-control"
               value={this.state.age} onChange={this.changeNumber}/>
          Date: {this.state.date}
            <input type="date" name="date" className="form-control"
                value={this.state.date} onChange={this.changeString}/>

          RadioButton: {this.state.sports}<br />
            <div className="form-check">
              <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                  onChange={this.changeString} defaultChecked={this.state.sports === 'baseball'} />
              <label htmlFor="baseball" className="form-check-label">야구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                  onChange={this.changeString} defaultChecked={this.state.sports === 'soccer'} />
              <label htmlFor="soccer" className="form-check-label">축구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                  onChange={this.changeString} defaultChecked={this.state.sports === 'basketball'}/>
              <label htmlFor="basketball" className="form-check-label">농구</label>
            </div>

          {/* 값이 true / false도 undefined와 같이 화면 출력은 안된다 */}
          CheckBox One: {this.state.isChecked ? '동의' : '동의 안함'}<br />
            <div className="form-check">
              <input type="checkbox" name="isChecked" className="form-check-input" 
                  defaultChecked={this.state.isChecked === true} onChange={this.changeCheck} />
              <label htmlFor="check" className="form-check-label">동의</label>
            </div>

          CheckBox: { this.state.language.join('-') } <br />
            <div className="form-check">
              <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                  defaultChecked={this.state.language.includes('Angular')} onChange={this.changeLanguage}  />
              <label htmlFor="baseball" className="form-check-label">앵귤러</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                  defaultChecked={this.state.language.includes('React')} onChange={this.changeLanguage}  />
              <label htmlFor="react" className="form-check-label">리엑트</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" 
                  defaultChecked={this.state.language.includes('Vue')} onChange={this.changeLanguage} />
              <label htmlFor="vue" className="form-check-label">뷰</label>
            </div>

          SelectBox: {this.state.baseball}<br/>
            <select name="baseball" className="form-control" 
                value={this.state.baseball} onChange={this.changeString}>
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          
          SelectBox Multi: {Array.from(this.state.four) }<br />
            <select name="four" multiple size="3" className="form-control" 
              value={this.state.four} onChange={this.changeOptions}>
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          <br />

          <button type="submit"   onClick={this.sendData}>SEND</button>
        </form>
      </div>
    );
  };
};
export default A03ClassEvent
