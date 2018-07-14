import PropTypes from 'prop-types';
import React from 'react';
import {Shell} from '../icons/Shell';
import {RouteContext} from '../ProviderRouteContext';
import {ButtonAction} from './ButtonAction';

export const ButtonNav = props =>
  <RouteContext.Consumer>
    {routeProps => <ButtonAction {...props.applyProps(routeProps)}/>}
  </RouteContext.Consumer>;

ButtonNav.propTypes = {
  applyProps: PropTypes.func
};
ButtonNav.defaultProps = {
  applyProps: () => ({
    as: 'i',
    icon: Shell
  })
};
