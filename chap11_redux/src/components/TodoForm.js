import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodoAction, changeTextAction } from './../modules/todoListR'

function TodoForm(props) {
  const {text, changeText, addTodo } = props;
  const inputFiled = useRef();
  
  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim().length !== 0) {
      addTodo(text);
    }
    changeText('');
    inputFiled.current.focus();
  }
  
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled} 
          value={text} onChange={evt => changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>  
    </form>
  )
}
export default connect(
  state => ({
    text: state.todoListR.text,
  }),
  dispatch => ({
    addTodo: text => dispatch(addTodoAction(text)),
    changeText: text => dispatch(changeTextAction(text)),
  })
)(TodoForm);
