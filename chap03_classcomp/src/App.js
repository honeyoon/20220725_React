import A01Props from './components/A01Props'
import A02State from './components/A02State'
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05LifeCycle from './components/A05LifeCycle'
import A06PureComponent from './components/A06PureComponent'
import A07ShallowEqual from './components/A07ShallowEqual'

function App() {
  // 일반 변수. React의 감시 대상 변수가 아니다.
  // const [tel, setTel] = useState('010-1234-5678');   // 감시 대상 변수
  const address = 'Seoul';
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 30};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  const dom = <div>Hello World</div>;

  return (
    <div className="m-3">
      <h1>Chap03 Class Component</h1>

      <A07ShallowEqual></A07ShallowEqual><br />
      <A06PureComponent></A06PureComponent><br />
      <A05LifeCycle check={false} color={'red'}></A05LifeCycle><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03ClassEvent></A03ClassEvent><br />
      <A02State></A02State><br />

      {/* {}로 사용한 값은 변수 이름을 참조한다. 값으로 전달은 {'문자열'}, {30}, {true} */}
      <A01Props name="NolBu" dom={dom} age={30} add={address} arr={arr} user={user} onAdd={onAdd} isChecked>
          값은 속성으로 필요에 따라 전달<br />
          컴퍼넌트 내부의 뷰가 호출하는 곳에 따라 조금씩 다른 요소가 있다면 사용하는 곳에서 전달<br />
          This is App Content A
      </A01Props>
      <br />
      <A01Props name="NolBu" age={30} add={address} arr={arr} user={user} onAdd={onAdd} isChecked>
          This is App Content B
      </A01Props>
    </div>
  );
}

export default App;
