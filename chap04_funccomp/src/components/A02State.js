
import React, {useState} from 'react'
/*
function getABC() {
  return ['abc', () => {console.log('abc')}]
}
const [str, method] = getABC();
*/

function A02State() {
  // state는 hook으로 작성한다.
  // const [변수명, 변수를 변경하는 함수] = useState(기본값);
  const [name, setName] = useState('NolBu');
  const [age, setAge] = useState(10);
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({
    name: 'HungBu',
    age: 30,
  });
  const [isChecked, setIsChecked] = useState(true);

  const changeName = () => setName('HungBu');
  const changeAge = () => setAge(50);
  
  // Array
  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    setArray(arr.concat(random)); 
  }
  const updateArray = (value, index) => {
    const newArr = arr.map((item, i) => index === i ? value : item);
    setArray(newArr);
  }
  const deleteArray = index => {
    const newArr = arr.filter((item, i) => index !== i);
    setArray(newArr);
  }

  const addObject = (key, value) => {
    const newObj = {...user, [key]: value};
    setUser(newObj);
  };
  const updateObject = (key, value) => {
    const newObj = {...user, [key]: value};
    setUser(newObj);
  };
  const deleteObject = (key) => {
    delete user[key];
    const newObj = {...user};
    setUser(newObj);
  };
  
  const changeCheck = () => setIsChecked(!isChecked);

  return (
    <div>
      <h3>A02 State</h3>

      <div>
        Name: {name}<br />
        Age: {age}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        isChecked: {isChecked ? '동의' : '동의 안함'}
      </div>
      <br />

      <div>
        {arr.map((item, i) => <span key={i}>{item}, </span>)}
      </div>

      <div>
        <button onClick={changeName}>Name</button>
        <button onClick={changeAge}>Age</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(200, 0)}>Update Array</button>
        <button onClick={() => deleteArray(0)}>Delete Array</button>

        <button onClick={() => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>

        <button onClick={changeCheck}>Check</button>
      </div>

    </div>
  )
}

export default A02State;
