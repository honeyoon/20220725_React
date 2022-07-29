
const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

// state 변경 작업은 여기서 안된다. 넘길 값에 대한 사전 작업만 여기서 한다.
export const updateTodoAction = id => ({type: TODOLIST_DELETETODO, payload: id});
export const deleteTodoAction = id => ({type: TODOLIST_DELETETODO, payload: id});
export const addTodoAction = text => ({type: TODOLIST_ADDTODO, payload: text});
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
            return {...state}
        case TODOLIST_DELETETODO:
            return {...state}
        case TODOLIST_ADDTODO:
            return {...state}
        case TODOLIST_CHANGETEXT:
            return {...state}
        default:
            return state;
    }
}
export default todoListR;