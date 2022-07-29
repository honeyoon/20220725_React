// counterR.js
// redux-actions
import {createAction, handleActions} from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

export const increaseAction = createAction(COUNTER_INCREASE, num => {
  let value = Number(num);
  if(isNaN(value)) value = 0;
  return value;       // 이 값을 action의 payload 라는 이름으로 넣어준다.
});
export const decreaseAction = createAction(COUNTER_DECREASE)

const init = {
  storeName: 'Counter Store',
  num: 0,
}
const counterR = handleActions({
  [COUNTER_INCREASE]: (state, action) => {
    return {...state, num: state.num + action.payload}
  },
  [COUNTER_DECREASE]: (state, action) => {
    return {...state, num: state.num - 1};
  }
}, init);

export default counterR;

/*
const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

export const increaseAction = num => {
  let value = Number(num);
  if(isNaN(value)) value = 0;
  return {type: COUNTER_INCREASE, payload: value}
}
export const decreaseAction = () => ({type: COUNTER_DECREASE});

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
export default counterR;
*/