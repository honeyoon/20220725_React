import {combineReducers} from 'redux'
import counterR from './counterR'
import todoListR from './todoListR'

const rootReducer = combineReducers({
  counterR, todoListR, 
});
export default rootReducer;
