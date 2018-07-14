import PropTypes from 'prop-types';
import React from 'react';
import {Shell} from './icons/Shell';
import {RouteContext} from './ProviderRouteContext';

export const TitleNavButton = props =>
  <RouteContext.Consumer>
    {routeProps => <props.button {...routeProps}/>}
  </RouteContext.Consumer>;

TitleNavButton.propTypes = {
  button: PropTypes.func
};
TitleNavButton.defaultProps = {
  button: Shell
};
