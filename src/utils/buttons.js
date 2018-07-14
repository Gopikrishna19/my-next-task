import {BlockIconBack} from '../components/BlockIconBack';

export const backButton = (icon = BlockIconBack) => routeProps => ({
  icon,
  onClick: routeProps.history.goBack
});
