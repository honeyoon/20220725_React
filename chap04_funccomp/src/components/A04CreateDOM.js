import React, { useState, useRef } from "react";

function A04CreateDOM() {
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  // 화면이 리 렌더링되면 이 변수도 다시 읽어지면서 4로 초기화된다.
  // let cnt = 4;
  const cnt = useRef(4);      // 화면 갱신 작업은 하지 않는다.

  const changeValue = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const addTeam = () => setBaseObject(baseObject.concat({ id: cnt.current++, team: "삼성", value: "Samsung" }));
  const showHide = () => setData({ ...data, isChecked: !data.isChecked });

  const changeTeam = (evt) => setData({...data, team: evt.target.value});
  const addBaseArray = () => {
    baseArray.push(data.team);
    // forceUpdate();               // 지원하지 않음. useState 사용
  }

  const table = baseObject.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.value}</td>
    </tr>
  ))

  return (
    <div>
      <h3>A04 Make DOM</h3>
      SelectBox: {data.teamOne}
      <br />
      <select name="teamOne" className="form-control" onChange={changeValue}>
        <option>선택해주세요</option>
        {baseArray.map((item, i) => <option key={i}>{item}</option>)}
      </select>

      SelectBox: {data.teamTwo}
      <br />
      <select name="teamTwo" className="form-control" onChange={changeValue}>
        <option value="">선택해주세요</option>
        {baseObject.map( (item) => <option key={item.id} value={item.value}>{item.team}</option> )}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
      <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      <br />
      <br />

      { data.isChecked && 
        <div className="input-group">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }
      <br />

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
export default A04CreateDOM;
