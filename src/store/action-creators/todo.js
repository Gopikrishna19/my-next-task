import {injectTodos} from '../../middleware/todos';
import {createTodo, deleteTodos, offTodosChange, onTodosChange, updateTodos} from '../../repository/todos';
import {Todos} from '../../state/Todos';
import {actions} from '../actions';
import {showToast} from './toast';

export const addTodo = todo =>
  async dispatch => {
    await createTodo(todo);

    dispatch(showToast('Added a to do item'));
  };

export const deleteSelectedTodos = () =>
  injectTodos(todos => deleteTodos(todos.filter(todo => todo.isSelected)));

export const connectTodos = () =>
  dispatch => onTodosChange(
    todos => dispatch({
      todos,
      type: actions.TODOS_SET
    })
  );

export const disconnectTodos = () =>
  () => offTodosChange();

export const toggleAllTodos = selection => ({
  selection,
  type: actions.TODOS_UPDATE_SELECTION_OF_ALL
});

export const toggleTodo = index => ({
  index,
  type: actions.TODOS_UPDATE_SELECTION
});

export const updateSelectedTodosStatus = status =>
  injectTodos(todos => {
    const updatedTodos = Todos.updateSelectedTodosStatus(todos, status);
    const newTodos = Todos.updateAllTodosSelection(updatedTodos, false);

    updateTodos(newTodos);
  });

export const updateTodoStatus = (index, status) =>
  injectTodos(todos => updateTodos(Todos.updateTodoStatus(todos, index, status)));
