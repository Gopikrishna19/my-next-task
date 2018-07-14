import {actions} from '../actions';

export const addTodo = todo => ({
  todo,
  type: actions.TODOS_ADD
});
