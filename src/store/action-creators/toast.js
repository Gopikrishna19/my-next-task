import {actions} from '../actions';

export const showToast = toast => ({
  toast,
  type: actions.TOAST_ADD
});

export const hideOldestToast = () => ({type: actions.TOAST_REMOVE_OLDEST});
