import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/Counter'
import TodoTemplate from './components/TodoTemplate'

// npm i redux react-redux redux-actions redux-devtools-extension

function App() {
  return (
    <div className="card-body">
      <TodoTemplate />
      <br />

      <Counter />      
    </div>
  );
}

export default App;
