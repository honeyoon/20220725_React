// TodoListContext.js
import { createContext, useState } from 'react'

const TodoListContext = createContext({
  state: {todoList: [], text: ''},
  action: {
    updateTodoList: id => {},
    deleteTodoList: id => {},
    addTodoList: text => {},
    changeText: text => {}
  }
});

function TodoListProvider(props) {
  return (
    <TodoListContext.Provider>
      {props.children}
    </TodoListContext.Provider>   
  )
}
const TodoListConsumer = TodoListContext.Consumer;

export {TodoListProvider, TodoListConsumer}