import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';
import {defaultTheme} from '../../state/themes';

const handlers = {
  [actions.THEME_CHANGE]: (state, action) => action.theme
};

export default defineReducer(handlers, () => defaultTheme);
