// SelectColorContext.js
import { createContext, useState } from 'react'

const SelectColorContext = createContext({
  state: {contextName: '', color: '', bgColor: ''},
  action: {
    changeName: () => {},
    changeColor: () => {},
    setBgColor: () => {}
  }
});

function SelectColorProvider(props) {
  const [color, setColor] = useState('green');
  const [contextName, setContextName] = useState('SelectBox Context');
  let bgColor = 'gray';
  const changeBgColor = () => bgColor = 'orange'

  const data = {
    state: {color, contextName, bgColor},
    action: {setColor, setContextName, changeBgColor}
  }
  return (
    <SelectColorContext.Provider value={data}>
      {props.children}
    </SelectColorContext.Provider>
  )
}
const SelectColorConsumer = SelectColorContext.Consumer;

export { SelectColorProvider, SelectColorConsumer };
