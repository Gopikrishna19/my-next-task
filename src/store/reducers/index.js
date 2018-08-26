import {combineReducers} from 'redux';
import toasts from './toasts';
import shoppingItems from './shopping-items';
import todos from './todos';
import user from './user';

export default combineReducers({
  shoppingItems,
  toasts,
  todos,
  user
});
