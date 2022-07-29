import React from "react";
import "./css/todos.css";
import { /*connect,*/ useDispatch } from 'react-redux'
import { updateTodoAction, deleteTodoAction } from './../modules/todoListR'

function TodoListItem(props) {
  const { todo, /* updateTodo, deleteTodo */ } = props;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </td>
      <td>
        {/* <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button> */}
        <button className="btn btn-primary" onClick={() => dispatch(updateTodoAction(todo.id))}>Complete</button>
      </td>
      <td>
        {/* <button className="btn btn-danger"  onClick={() => deleteTodo(todo.id)}>Delete</button> */}
        <button className="btn btn-danger"  onClick={() => dispatch(deleteTodoAction(todo.id))}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);

/*
export default connect(
  state => ({}),
  dispatch => ({
    updateTodo: id => dispatch(updateTodoAction(id)),
    deleteTodo: id => dispatch(deleteTodoAction(id)),
  })
)(React.memo(TodoListItem));
*/
