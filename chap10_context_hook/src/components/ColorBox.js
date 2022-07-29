import React from "react";
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorConsumer } from './../modules/SelectColorContext'

function ColorBox() {
  return (
    <ColorBoxContext.Consumer>
      {value => (
        <SelectColorConsumer>
          {data => (
            <div>
              <h3>{value.contextName}</h3>
              <div style={{width: '50px', height: '50px', display: 'block', background: value.color}}></div>

              <h3>{data.state.contextName}</h3>
              <div style={{width: '50px', height: '50px', display: 'block', background: data.state.color}}></div>
              <div style={{width: '50px', height: '50px', display: 'block', background: data.state.bgColor}}></div>
            </div>
          )}
        </SelectColorConsumer>
        
      )}
    </ColorBoxContext.Consumer>
  );
}
export default ColorBox;
