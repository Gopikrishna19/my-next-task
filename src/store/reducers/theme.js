import {defaultTheme} from '../../state/themes';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.THEME_CHANGE]: (state, action) => action.theme
};

export default defineReducer(handlers, () => defaultTheme);
