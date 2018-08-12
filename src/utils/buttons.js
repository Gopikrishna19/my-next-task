import {Back} from '../components/icons/Back';

export const backButton = (icon = Back) => routeProps => ({
  icon,
  onClick: routeProps.history.goBack
});
