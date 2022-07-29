// store.js

const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

const increaseAction = num => {
  let value = Number(num);
  if(isNaN(value)) value = 0;
  return {type: COUNTER_INCREASE, payload: value}
}
const decreaseAction = () => ({type: COUNTER_DECREASE});

const init = {
  storeName: 'Counter Store',
  num: 0,
}
// dispatch({type: 'COUNTER_INCREASE', payload: 2})
const counterR = (state=init, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return {...state, num: state.num + action.payload}
    case COUNTER_DECREASE:
      return {...state, num: state.num - 1};    // ++, -- 사용 안됨
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state = reducer(undefined, '');
  // console.log(state);

  const getState = () => {
    return {...state}
  }

  // action => {type: COUNTER_INCREASE, payload: value}
  const dispatch = (action) => {
    state = reducer(state, action);
  }

  return {getState, dispatch}
}

const store = createStore(counterR);
console.log(store.getState());

store.dispatch(increaseAction(3));
console.log(store.getState());
