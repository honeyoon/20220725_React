import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoListConsumer } from './../modules/TodoListContext'

function Todolist() {
  return (
    <TodoListConsumer>
      {data => (
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
            { data.state.todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
          </tbody>
        </table>
      )}
    </TodoListConsumer>
  );
}
export default Todolist;
