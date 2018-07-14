import {defaultTodos, Todos} from '../../state/Todos';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.TODOS_ADD]: (state, action) => Todos.addTodo(state, action.todo),
  [actions.TODOS_SET]: (state, action) => action.theme
};

export default defineReducer(handlers, () => defaultTodos);
