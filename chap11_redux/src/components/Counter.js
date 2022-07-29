import React from "react";
import { useDispatch, useSelector, /*connect*/ } from 'react-redux'
import { increaseAction, decreaseAction } from './../modules/counterR'

function Counter() {

  // const {storeName, num, increase, decrease} = props;
  const {storeName, num} = useSelector(state => state.counterR);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{storeName}: {num}</h3>
      <button onClick={() => dispatch(increaseAction(2))}>+</button>  {/* increase(2) */}
      <button onClick={() => dispatch(decreaseAction())}>-</button>   {/* decrease() */}
    </div>
  );
}
export default Counter;

/*
export default connect(
  // 등록한 값을 props로 전달한다.
  // 다증 등록이 되어 있는 경우는 modules/index.js에 정의한 이름으로 참조한다
  state => ({
    storeName: state.counterR.storeName,
    num: state.counterR.num
  }),
  dispatch => ({
    increase: num => dispatch(increaseAction(num)),
    decrease: () => dispatch(decreaseAction())
  })
)(Counter);
*/