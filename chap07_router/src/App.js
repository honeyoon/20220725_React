import { Link, Navigate, Route, Routes } from "react-router-dom";
import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05Param from './components/A05Param'
import A06Arguments from './components/A06Arguments'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap07 Router</h1>

      {/* Route에 기술한 path 이름으로 링크를 설정한다 */}
      <Link to="/">Index</Link> | {' '}
      <Link to="/A01Props">A01Props</Link> | {' '}
      <Link to="/A02State">A02State</Link> | {' '}
      <Link to="/A03Currency">A03Currency</Link> | {' '}
      <Link to="/A04History">A04History</Link> | {' '}
      <Link to="/A05Param/1/NolBu">A05Param 1</Link> | {' '}
      <Link to="/A05Param/2/HungBu">A05Param 2</Link> | {' '}
      <Link to="/A06Arguments?id=3&name=BangJa&add=Seoul#TOP">A06Arguments</Link> | {' '}

      <hr />

      {/* 기술된 위치에 설정한 컴퍼넌트가 표시 */}
      <Routes>
        {/* 페이지 이동. replace history를 남기지 않음 */}
        <Route path="/"                     element={<Navigate to='A01Props' replace />} />
        <Route path="/A01Props"             element={<A01FuncProps name="NolBu" age={30} arr={ary} user={user} onAdd={onAdd} isChecked />} />
        <Route path="/A02State"             element={<A02FuncState />} />
        <Route path="/A03Currency"                element={<A03Currency />} />
        <Route path="/A04History"                 element={<A04History />} />
        {/* :id, :name은 변수명이며 호출하는 곳(Link)에서 값을 주입해 준다. 이 주입한 값이 변수의 값이 된다 */}
        <Route path="/A05Param/:id/:name"         element={<A05Param />} />
        {/* argument로 데이터를 받으므로 여기서는 패스명만 기술. Link에서 값을 지정한다 */}
        <Route path="/A06Arguments"               element={<A06Arguments />} />
      </Routes>
    </div>
  );
}

export default App;

// npm i react-router-dom
// npm i react-loader-spinner
