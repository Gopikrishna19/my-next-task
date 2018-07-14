import {defaultToasts, Toasts} from '../../state/Toasts';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.TOAST_ADD]: (state, action) => Toasts.addToast(state, action.toast),
  [actions.TOAST_REMOVE_OLDEST]: state => Toasts.removeOldestToast(state)
};

export default defineReducer(handlers, () => defaultToasts);
