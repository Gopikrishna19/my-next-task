import {defaultTodos, Todos} from '../../state/Todos';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.TODOS_ADD]: (state, action) => Todos.addTodo(state, action.todo),
  [actions.TODOS_POPULATE]: (state, action) => new Todos(action.todos),
  [actions.TODOS_UPDATE_SELECTION]: (state, action) => Todos.updateTodoSelection(state, action.index),
  [actions.TODOS_UPDATE_SELECTION_OF_ALL]: (state, action) => Todos.updateAllTodosSelection(state, action.selection),
  [actions.TODOS_UPDATE_STATUS]: (state, action) => Todos.updateTodoStatus(state, action.index, action.status),
  [actions.TODOS_UPDATE_STATUS_OF_SELECTED]: (state, action) => Todos.updateSelectedTodosStatus(state, action.status)
};

export default defineReducer(handlers, () => defaultTodos);
