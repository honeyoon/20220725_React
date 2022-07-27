import PropTypes from 'prop-types'

// props는 함수의 매개변수로 주입 받는다
function A01Props(props) {
  // 디 스트럭처링
  const {name, age, add, arr, user, onAdd, isChecked, children} = props;

  return (
    <div>
      <h3>A01 Props - 수정 불가</h3>

      <div>
        Name: {props.name}<br />
        age: {props.age}<br />
        add: {props.add}<br />
        arr: {props.arr[0]} / {props.arr[1]} / {props.arr[2]}<br />
        user: {props.user.name} / {props.user.age} / {props.user.address}<br />
        onAdd: {props.onAdd(10, 20)}<br />
        isChecked: {props.isChecked ? 'T' : 'F'}<br />
        <br />
        {props.children}
      </div>

      <hr />

      <div>
        Name: {name}<br />
        age: {age}<br />
        add: {add}<br />
        arr: {arr[0]} / {arr[1]} / {arr[2]}<br />
        user: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        isChecked: {isChecked ? 'T' : 'F'}<br />
        <br />
        {children}
      </div>
      
    </div>
  )
}
export default A01Props;

A01Props.defaultProps = {
  num: 0,
  obj: {name: 'Unknown'}
}
A01Props.propTypes = {
  name: PropTypes.string,
}