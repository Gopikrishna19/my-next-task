import {actions} from '../actions';

export const setUser = user => ({
  type: actions.USER_SET,
  user
});
