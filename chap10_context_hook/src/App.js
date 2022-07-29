import ColorBox from './components/ColorBox'
import TodoTemplate from './components/TodoTemplate'
import SelectColor from './components/SelectColor'

// Provider(발행자) Consumer(수신자)를 제ㅇ
import ColorBoxContext from './modules/ColorBoxContext'
import { SelectColorProvider } from './modules/SelectColorContext'
import { TodoListProvider } from './modules/TodoListContext'

function App() {
  const data = {contextName: 'ColorBox Context', color: 'orange'}
  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>
      
      <ColorBoxContext.Provider value={data}>
        <SelectColorProvider>
          <ColorBox />
          <SelectColor />
        </SelectColorProvider>
      </ColorBoxContext.Provider>

      <hr />
      
      <TodoListProvider>
        <TodoTemplate />
      </TodoListProvider>
    </div>
  );
}

export default App;
