import A01Props from './components/A01Props'
import A02State from './components/A02State'
import A03FuncEvent from './components/A03FuncEvent'

function App() {
  const address = 'Seoul';
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 30};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap04 Function Component</h1>

      <A03FuncEvent></A03FuncEvent><br />
      <A02State></A02State><br />
      <A01Props name="NolBu" age={30} add={address} arr={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content
      </A01Props>
    </div>
  );
}

export default App;
