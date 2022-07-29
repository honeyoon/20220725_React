import React from "react";
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from './../modules/counterR'

function Counter(props) {

  const {storeName, num, increase, decrease} = props;

  return (
    <div>
      <h3>{storeName}: {num}</h3>
      <button onClick={() => increase(2)}>+</button>
      <button onClick={() => decrease()}>-</button>
    </div>
  );
}
export default connect(
  // 등록한 값을 props로 전달한다.
  state => ({
    storeName: state.storeName,
    num: state.num
  }),
  dispatch => ({
    increase: num => dispatch(increaseAction(num)),
    decrease: () => dispatch(decreaseAction())
  })
)(Counter);
