import React, { useRef } from 'react'
import { TodoListConsumer } from './../modules/TodoListContext'

function TodoForm() {
  const inputFiled = useRef();
  
  const sendData = (evt, data) => {
    evt.preventDefault();
    data.action.addTodo(data.state.text);
    data.action.changeText('');
    inputFiled.current.focus();
  }
  
  return (
    <TodoListConsumer>
      {data => (
        <form>
        <div className="input-group">
          <input type="text" className="form-control" ref={inputFiled} 
            value={data.state.text} onChange={(evt) => data.action.changeText(evt.target.value)} />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary mr-1" 
              onClick={(evt) => sendData(evt, data)}>Submit</button>
          </div>
        </div>  
      </form>
      )}
    </TodoListConsumer>
    
  )
}
export default TodoForm;
