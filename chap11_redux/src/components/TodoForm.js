import React, { useRef } from 'react'
import { useDispatch, useSelector, /*connect*/ } from 'react-redux'
import { addTodoAction, changeTextAction } from './../modules/todoListR'

function TodoForm() {
  // const {text, changeText, addTodo } = props;
  const inputFiled = useRef();

  const { text } = useSelector(state => state.todoListR);
  const dispatch = useDispatch();
  
  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim().length !== 0) {
      // addTodo(text);
      dispatch(addTodoAction(text))
    }
    // changeText('');
    dispatch(changeTextAction(''))
    inputFiled.current.focus();
  }
  
  return (
    <form>
      <div className="input-group">
        {/* <input type="text" className="form-control" ref={inputFiled} value={text} onChange={evt => changeText(evt.target.value)} /> */}
        <input type="text" className="form-control" ref={inputFiled} 
          value={text} onChange={evt => dispatch(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>  
    </form>
  )
}
export default TodoForm;
/*
export default connect(
  state => ({
    text: state.todoListR.text,
  }),
  dispatch => ({
    addTodo: text => dispatch(addTodoAction(text)),
    changeText: text => dispatch(changeTextAction(text)),
  })
)(TodoForm);
*/