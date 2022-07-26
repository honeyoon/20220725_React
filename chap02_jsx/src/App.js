// JSX
// DOM 구조 생성
// 1. 문자열이 아닌 일반 태그로 구성한다
// 2. 1개의 요소만 태그로 변환이 가능하다

/*
const dom = <h1>Hello World</h1>
function First() {
  return dom;
}

function First() {
  return <h1>Hello World 2</h1>;
}

const dom = <div>
  <h1>Hello World 3</h1>
  <div>This is Content</div>
</div>

function First() {
  return dom;
}

function First() {
  return <div>
    <h1>Hello World 4</h1>
    <div>This is Content</div>
  </div>;
}

function First() {
  return (
    <div>
      <h1>Hello World 5</h1>
      <div>This is Content</div>
    </div>
  );
}
export default First;
*/
import A01MakeDOM from './components/A01MakeDOM'

function App() {
  // View Model
  const name = 'NolBu';
  const age = 40;
  const arr = [10, 20];

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // JSX 구문을 리턴하는 함수
  const makeDOM = () => {
    return <div>
      <h3>Sub DOM</h3>
      <div>This is Sub Content</div>
    </div>
  }

  // 사용자 정의 태그
  const MakeDOM = () => {
    const x = 'HungBu';
    return <div>
      <h3>Sub DOM</h3>
      <div>This is Sub Content. {x}</div>
    </div>
  }

  // View
  return (
    // 속성명은 자바스크립트 속성명을 따른다.
    <div className="m-3">
      <h1>Chap02 JSX</h1>

      <div>
        Thi is App Content<br />
        Name: {name}<br />
        Age: {age}<br />
        Array: {arr[0]} / {arr[1]}<br />
        onAdd: {onAdd(10, 20)}<br />
        <br />
        {makeDOM()}
        <br />

        <MakeDOM />
        <br />

        <A01MakeDOM></A01MakeDOM>

      </div>
    </div>
  );
}
export default App;
