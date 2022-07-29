import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoListContext } from './../modules/TodoListContext'

function Todolist() {
  const { state } = useContext(TodoListContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{width: "10%"}}>ID</th>
          <th>Todo</th>
          <th style={{width: "10%"}}>Complete</th>
          <th style={{width: "10%"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        { state.todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </tbody>
    </table>
  );
}
export default Todolist;
