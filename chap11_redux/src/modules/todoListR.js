import { createAction, handleActions } from 'redux-actions'

const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

// state 변경 작업은 여기서 안된다. 넘길 값에 대한 사전 작업만 여기서 한다.
export const updateTodoAction = createAction(TODOLIST_UPDATETODO, id => id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, id => id);
export const addTodoAction = createAction(TODOLIST_ADDTODO, text => {
    return {id: cnt++, text, done: false};
});
export const changeTextAction = text => ({type: TODOLIST_CHANGETEXT, payload: text});

const makeTodo = () => {
    const todos = [];
    for(var i = 1; i <= 5; i++) {
        todos.push({id: i, text: `${i}번째 할 일 `, done: false})
    }
    return todos;
};

let cnt = 6;

const init = {
    todoList: makeTodo(),
    text: ''
}
const todoListR = (state = init, action) => {
    switch (action.type) {
        case TODOLIST_UPDATETODO:
            const update = state.todoList.map(todo => {
                if (todo.id === action.payload) return {...todo, done: !todo.done};
                else return todo;
            })
            return {...state, todoList: update};
        case TODOLIST_DELETETODO:
            const deleteTodos = state.todoList.filter(todo => todo.id !== action.payload);
            return {...state, todoList: deleteTodos};
        case TODOLIST_ADDTODO:
            return {...state, todoList: state.todoList.concat(action.payload)};
        case TODOLIST_CHANGETEXT:
            return {...state, text: action.payload}
        default:
            return state;
    }
}
export default todoListR;