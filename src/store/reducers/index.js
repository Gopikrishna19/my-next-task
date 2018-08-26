import {combineReducers} from 'redux';
import shoppingItems from './shopping-items';
import toasts from './toasts';
import todos from './todos';
import user from './user';

export default combineReducers({
  shoppingItems,
  toasts,
  todos,
  user
});
