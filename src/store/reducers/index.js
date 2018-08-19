import {combineReducers} from 'redux';
import toasts from './toasts';
import todos from './todos';
import user from './user';

export default combineReducers({
  toasts,
  todos,
  user
});
