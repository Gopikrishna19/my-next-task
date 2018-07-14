import {combineReducers} from 'redux';
import theme from './theme';
import toasts from './toasts';
import todos from './todos';

export default combineReducers({
  theme,
  toasts,
  todos
});
