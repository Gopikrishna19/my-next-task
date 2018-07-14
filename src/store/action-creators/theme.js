import {actions} from '../actions';

export const onThemeChange = theme => ({
  theme,
  type: actions.THEME_CHANGE
});
