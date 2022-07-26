import React, { Component } from "react";

class A04CreateDOM extends Component {
  constructor() {
    super();
    this.baseArray = ["NC", "두산", "엘지", "KT", "키움"];
    this.num = 4;
  }

  state = {
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
    baseObject: [
      { id: 1, team: "NC", value: "NC" },
      { id: 2, team: "두산", value: "Doosan" },
      { id: 3, team: "엘지", value: "LG" },
    ],
  };

  changeValue = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  addTeam = () =>
    this.setState({
      baseObject: this.state.baseObject.concat({
        id: this.num++,
        team: "삼성",
        value: "Samsung",
      }),
    });
  showHide = () => this.setState({ isChecked: !this.state.isChecked });

  addArray = () => {
    this.baseArray.push(this.state.team);

    // 현재 VM에 있는 변수값 기반으로 화면을 강제적으로 리 렌더링 한다.
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h3>A04 Make DOM</h3>
        SelectBox: {this.state.teamOne}
        <br />
        <select name="teamOne" className="form-control" onChange={this.changeValue}>
          <option>선택해주세요</option>
          {this.baseArray.map((item, index) => <option key={index}>{item}</option>)}
        </select>

        SelectBox: {this.state.teamTwo}
        <br />
        <select name="teamTwo" className="form-control" onChange={this.changeValue}>
          <option value="">선택해주세요</option>
          {this.state.baseObject.map(item => <option key={item.id} value={item.value}>{item.team}</option>)}
        </select>

        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Team</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.state.baseObject.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.value}</td>
                  <td>{item.team}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <button className="btn btn-outline-primary btn-sm" onClick={this.addTeam}>ADD TEAM</button>
        <br />
        <br />

        { this.state.isChecked && 
          <div className="input-group">
            <input type="text" className="form-control" name="team" 
                value={this.state.team} onChange={this.changeValue} />
            <button className="btn btn-outline-primary btn-sm"
                onClick={this.addArray}>ADD</button>
          </div>
        }
        <br />

        <button className="btn btn-outline-primary btn-sm" onClick={this.showHide}>
          {this.state.isChecked ? "HIDE" : "SHOW"}
        </button>
      </div>
    );
  }
}
export default A04CreateDOM;
