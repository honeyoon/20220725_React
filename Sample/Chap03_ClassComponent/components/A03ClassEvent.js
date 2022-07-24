import React, { Component } from 'react'

class A03ClassEvent extends Component {

  state = {
    name: 'NolBu',
    age: 30,
    date: '2030-12-25',
    sports: 'baseball',
    language: [],
    isChecked: false,
    baseball: 'NC',
    four: [],
  };
    
  render() {
    return (
      <div>
        <h3>A03 Class Component Event & Form</h3>

        <form>
          Name: {this.state.name}
            <input type="text" name="name" className="form-control" />
          Age: {this.state.age} 
            <input type="text" name="age" className="form-control" />
          Date: {this.state.date}
            <input type="date" name="date" className="form-control" />

          RadioButton: {this.state.sports}<br />
            <div className="form-check">
              <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" />
              <label htmlFor="baseball" className="form-check-label">야구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" />
              <label htmlFor="soccer" className="form-check-label">축구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" />
              <label htmlFor="basketball" className="form-check-label">농구</label>
            </div>

          CheckBox One: {this.state.isChecked}<br />
            <div className="form-check">
              <input type="checkbox" name="isChecked" className="form-check-input" />
              <label htmlFor="check" className="form-check-label">동의</label>
            </div>

          CheckBox: { Array.from(this.state.language) } <br />
            <div className="form-check">
              <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input" />
              <label htmlFor="baseball" className="form-check-label">앵귤러</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="React" id="react" className="form-check-input" />
              <label htmlFor="react" className="form-check-label">리엑트</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" />
              <label htmlFor="vue" className="form-check-label">뷰</label>
            </div>

          SelectBox: {this.state.baseball}<br/>
            <select name="baseball" className="form-control" >
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          
          SelectBox Multi: {Array.from(this.state.four) }<br />
            <select name="four" multiple size="3" className="form-control" >
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          <br />

          <button type="submit">SEND</button>
        </form>
      </div>
    );
  };
};
export default A03ClassEvent
