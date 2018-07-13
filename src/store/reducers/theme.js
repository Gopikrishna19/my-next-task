import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';
import {defaultTheme} from '../state/themes';

const handlers = {
  [actions.CHANGE_THEME]: (state, action) => action.theme
};

export default defineReducer(handlers, () => defaultTheme);
