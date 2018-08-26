import {defaultTodos, Todos} from '../../state/Todos';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.TODOS_SET]: (state, action) => new Todos(action.todos),
  [actions.TODOS_UPDATE_SELECTION]: (state, action) => Todos.updateTodoSelection(state, action.index),
  [actions.TODOS_UPDATE_SELECTION_OF_ALL]: (state, action) => Todos.updateAllTodosSelection(state, action.selection)
};

export default defineReducer(handlers, () => defaultTodos);
