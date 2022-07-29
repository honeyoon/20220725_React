import React from 'react'
import { SelectColorConsumer } from './../modules/SelectColorContext'

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer'};

  return (
    <SelectColorConsumer>
      {data => (
        <div>
          <div style={{display: 'flex'}}>
            { colors.map( color => <div key={color} style={{...style, background: color}}
              onClick={() => data.action.setColor(color)}>{color}</div>)}
          </div>

          <div style={{display: 'flex'}}>
            { colors.map( color => <div key={color} style={{...style, background: color}}
              onClick={() => data.action.setBgColor(color)}>{color}</div>)}
          </div>
        </div>
      )}
    </SelectColorConsumer>
    
  )
}
export default SelectColor
