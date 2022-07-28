import React, { useRef, useState } from "react";

function TodoForm(props) {
  const {addTodo} = props;

  const [text, setText] = useState('');
  const todoRef = useRef();

  const changeText = evt => {
    if( evt.target.value.trim().length !== 0) {
      setText(evt.target.value);
    }
  }

  const sendData = evt => {
    evt.preventDefault();
    // console.log(todoRef.current.value);
    // addTodo(todoRef.current.value);
    addTodo(text);
    setText('');
    todoRef.current.focus();
  }

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={todoRef} value={text} onChange={changeText} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
