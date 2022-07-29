import ContactApp from './components/ContactApp'
import Counter from './components/Counter'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="m-3">
      <h1>React 18</h1>
        <ContactApp></ContactApp>
        <hr />
        <Counter />
    </div>
  );
}

export default App;
