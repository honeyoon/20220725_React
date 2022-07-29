import React, { useContext } from "react";
import ColorBoxContext from './../modules/ColorBoxContext'
import { SelectColorContext } from './../modules/SelectColorContext'

function ColorBox() {
  const colorBox = useContext(ColorBoxContext);
  const { state } = useContext(SelectColorContext);

  return (
    <div>
      <h3>{colorBox.contextName}</h3>
      <div style={{width: '50px', height: '50px', display: 'block', background: colorBox.color}}></div>

      <h3>{state.contextName}</h3>
      <div style={{width: '50px', height: '50px', display: 'block', background: state.color}}></div>
      <div style={{width: '50px', height: '50px', display: 'block', background: state.bgColor}}></div>
    </div>
  );
}
export default ColorBox;
