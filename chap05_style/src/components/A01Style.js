import React from "react";

// scaa, sass 파일 사용을 위한 모듈
// npm i node-sass
// react-scripts => 5  => npm i node-sass@7
// react-scripts => 4  => npm i node-sass@6

import './css/A01Style.css'
import './css/A01Style.scss';   // 기본 지원은 하지 않음

const color = 'title color';
const style = {
  background: 'black',
  color: 'aqua',
  padding: '20px',
  fontSize: '24pt',     // font-size => fontSize
  fontWeight: 'bold',
};

function A01Style() {
  return (
    <div>
      <h3 className="title color">A01 Style</h3>
      <h3 className={color}>A01 Style</h3>
      <h3 className="scssTitle">A01 Style</h3>
      <h3 style={style}>A01 Style</h3>
      <h3 style={ {background: 'black',
                    color: 'aqua',
                    padding: '20px',
                    fontSize: '24pt',
                    fontWeight: 'bold',} }>
      A01 Style</h3>
    </div>
  );
}

export default A01Style;
