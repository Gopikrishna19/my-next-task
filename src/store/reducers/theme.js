import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const defaultTheme = 'chocolate';

const handlers = {
  [actions.CHANGE_THEME]: (state, action) => action.theme
};

export default defineReducer(handlers, () => defaultTheme);
