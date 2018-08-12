import PropTypes from 'prop-types';
import React from 'react';
import {Shell} from '../icons/Shell';
import {RouteContext} from '../providers/RouteContext';
import {Action} from './Action';

export const Nav = props =>
  <RouteContext.Consumer>
    {routeProps => <Action {...props.applyProps(routeProps)}/>}
  </RouteContext.Consumer>;

Nav.propTypes = {
  applyProps: PropTypes.func
};
Nav.defaultProps = {
  applyProps: () => ({
    as: 'i',
    icon: Shell
  })
};
