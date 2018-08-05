import {defaultTodos, Todos} from '../../state/Todos';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.TODOS_ADD]: (state, action) => Todos.addTodo(state, action.todo),
  [actions.TODOS_POPULATE]: (state, action) => new Todos(action.todos),
  [actions.TODOS_UPDATE]: (state, action) => Todos.updateTodo(state, action.index, action.todo),
  [actions.TODOS_UPDATE_STATUS]: (state, action) => Todos.updateTodoStatus(state, action.index, action.status)
};

export default defineReducer(handlers, () => defaultTodos);
