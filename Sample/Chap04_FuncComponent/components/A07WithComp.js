// A07WithComp.js
import { useState, useCallback } from "react";

function A07WithComp(Comp) {
  return function InnerComp(props) {
    const [age, setAge] = useState(100);
    const changeAge = useCallback(() => setAge(200), []);

    return (
      <div>
        <h3>A07 Widh Component</h3>
        <div>
          Name: {props.name}
          <br />
          Age: {age}
        </div>
        
        <hr />

        <Comp {...props} age={age} changeAge={changeAge} />
      </div>
    );
  };
}
export default A07WithComp;
