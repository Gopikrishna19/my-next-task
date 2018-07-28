import {combineReducers} from 'redux';
import toasts from './toasts';
import todos from './todos';

export default combineReducers({
  toasts,
  todos
});
