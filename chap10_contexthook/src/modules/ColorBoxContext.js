// ColorBoxContext.js
import { createContext } from 'react'

const ColorBoxContext = createContext({
  contextName: '',
  color: '',
  bgColor: ''
});

export default ColorBoxContext;
