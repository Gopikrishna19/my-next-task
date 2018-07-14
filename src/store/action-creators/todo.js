import {actions} from '../actions';
import {showToast} from './toast';

export const updateTodoStatus = (index, status) =>
  dispatch => {
    dispatch({
      index,
      status,
      type: actions.TODOS_UPDATE_STATUS
    });
  };

export const addTodo = todo =>
  dispatch => {
    dispatch({
      todo,
      type: actions.TODOS_ADD
    });

    dispatch(showToast('Added a to do item'));
  };
