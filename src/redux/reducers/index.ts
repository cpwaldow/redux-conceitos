import { combineReducers } from 'redux';
import todoReducer from './todo';
import themeReducer from './theme';

const rootReducer = combineReducers({
  todoReducer,
  themeReducer,
});

export default rootReducer;
