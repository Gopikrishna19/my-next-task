import {actions} from '../actions';

export const updateTheme = theme => ({
  theme,
  type: actions.THEME_UPDATE
});
