import React, { useCallback, useRef, useState } from "react";
import produce from 'immer'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

  const updateTodo = useCallback(id => {
    setTodoList(todoList => produce(todoList, draft => {
      const index = todoList.findIndex(todo => todo.id === id);
      draft[index].done = !draft[index].done
    }))
  }, []);
  /*
  const updateTodo = useCallback(id => {
    setTodoList(todoList => todoList.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  }, []);

  const updateTodo = id => {
    const todos = todoList.map(todo => {
      if (todo.id === id) return {...todo, done: !todo.done};
      else return todo;
    });
    setTodoList(todos);
  };
  */
  
  const deleteTodo = useCallback(id => {
    setTodoList(todoList => produce(todoList, draft => {
      const index = todoList.findIndex(todo => todo.id === id);
      draft.splice(index, 1);
    }))
  }, []);
  /*
  const deleteTodo = useCallback(id => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id))
  }, []);

  const deleteTodo = id => {
    const todos = todoList.filter(todo => todo.id !== id);
    setTodoList(todos);
  }
  */

  const addTodo = useCallback(text => {
    const todo = {id: cnt.current++, text, done: false};
    setTodoList(todoList => produce(todoList, draft => {
      draft.push(todo);
    }))
  }, []);
  /*
  const addTodo = useCallback(text => {
    const todo = {id: cnt.current++, text, done: false};
    setTodoList(todoList => todoList.concat(todo));
  }, [])
  */

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
