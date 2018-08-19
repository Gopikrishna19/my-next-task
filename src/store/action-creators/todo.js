import {createTodo, deleteTodos, readTodos, updateTodos} from '../../repository/todos';
import {Todos} from '../../state/Todos';
import {actions} from '../actions';
import {showToast} from './toast';

export const addTodo = todo =>
  async dispatch => {
    dispatch({
      todo: await createTodo(todo),
      type: actions.TODOS_ADD
    });

    dispatch(showToast('Added a to do item'));
  };

export const deleteSelectedTodos = () =>
  async (dispatch, getState) => {
    const {todos} = getState();
    const todosToDelete = todos.filter(todo => todo.isSelected);
    const remainingTodos = todos.filter(todo => !todo.isSelected);

    await deleteTodos(...todosToDelete);

    dispatch({
      todos: remainingTodos,
      type: actions.TODOS_SET
    });
  };

export const getTodos = () =>
  async dispatch =>
    dispatch({
      todos: await readTodos(),
      type: actions.TODOS_SET
    });

export const toggleAllTodos = selection => ({
  selection,
  type: actions.TODOS_UPDATE_SELECTION_OF_ALL
});

export const toggleTodo = index => ({
  index,
  type: actions.TODOS_UPDATE_SELECTION
});

export const updateSelectedTodosStatus = status =>
  async (dispatch, getState) => {
    const {todos} = getState();
    const updatedTodos = Todos.updateSelectedTodosStatus(todos, status);
    const newTodos = Todos.updateAllTodosSelection(updatedTodos, false);

    await updateTodos(newTodos);

    dispatch({
      todos: newTodos,
      type: actions.TODOS_SET
    });
  };

export const updateTodoStatus = (index, status) => async (dispatch, getState) => {
  const {todos} = getState();
  const newTodos = Todos.updateTodoStatus(todos, index, status);

  await updateTodos(newTodos);

  dispatch({
    todos: newTodos,
    type: actions.TODOS_SET
  });
};
