import React, {useState} from "react";
// npm i classnames
import cns from 'classnames'

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
  const text = "text";
  const [isChecked, setIsChecked] = useState(true);

  const changeCheck = () => setIsChecked(!isChecked);

  return (
    <div>
      <h3 className={cns('bg', 'text', 'space')}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', {'text': false, 'space': true})}>A03 ClassNames Module</h3>
      
      <h3 className={cns('bg', text, 'space')}>A03 ClassNames Module</h3>
      <h3 className={cns('bg', {text: isChecked, 'space': true})}>A03 ClassNames Module</h3>
      
      {/* 변수명은 .을 포함할 수 없음 */}
      <h3 className={cns({[two.title]: isChecked, [two.reverse]: true })}>A03 ClassNames Module</h3>

      <h3 className={isChecked ? 'bg' : ''}>A03 ClassNames Module</h3>

      <button onClick={changeCheck}>Check</button>
    </div>
  );
}

export default A03Classnames;
