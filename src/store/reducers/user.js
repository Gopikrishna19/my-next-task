import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.USER_SET]: (state, action) => action.user
};

export default defineReducer(handlers, () => '');
