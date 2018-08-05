import {actions} from '../actions';
import {showToast} from './toast';

export const addTodo = todo =>
  dispatch => {
    dispatch({
      todo,
      type: actions.TODOS_ADD
    });

    dispatch(showToast('Added a to do item'));
  };

export const deleteSelectedTodos = () => ({
  type: actions.TODOS_DELETE_SELECTED
});

export const toggleAllTodos = selection => ({
  selection,
  type: actions.TODOS_UPDATE_SELECTION_OF_ALL
});

export const toggleTodo = index => ({
  index,
  type: actions.TODOS_UPDATE_SELECTION
});

export const updateSelectedTodosStatus = status => ({
  status,
  type: actions.TODOS_UPDATE_STATUS_OF_SELECTED
});

export const updateTodoStatus = (index, status) => ({
  index,
  status,
  type: actions.TODOS_UPDATE_STATUS
});
