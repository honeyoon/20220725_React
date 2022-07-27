import A01Props from './components/A01Props'
import A02State from './components/A02State'
import A03FuncEvent from './components/A03FuncEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A07HigherOrder from './components/A07HigherOrder'
import A08Immer from './components/A08Immer'
import A09Currency from './components/A09Currency'

function App() {
  const address = 'Seoul';
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 30};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap04 Function Component</h1>

      <A09Currency></A09Currency><br />
      <A08Immer></A08Immer><br />
      <A07HigherOrder name="NolBu"></A07HigherOrder><br />
      <A06Hook></A06Hook><br />
      <A05Hook></A05Hook><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03FuncEvent></A03FuncEvent><br />
      <A02State></A02State><br />
      <A01Props name="NolBu" age={30} add={address} arr={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content
      </A01Props>
    </div>
  );
}

export default App;
