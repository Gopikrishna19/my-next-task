import PropTypes from 'prop-types';
import React from 'react';
import {BlockIconShell} from './BlockIconShell';
import {RouteContext} from './ProviderRouteContext';
import {BlockButtonAction} from './BlockButtonAction';

export const BlockButtonNav = props =>
  <RouteContext.Consumer>
    {routeProps => <BlockButtonAction {...props.applyProps(routeProps)}/>}
  </RouteContext.Consumer>;

BlockButtonNav.propTypes = {
  applyProps: PropTypes.func
};
BlockButtonNav.defaultProps = {
  applyProps: () => ({
    as: 'i',
    icon: BlockIconShell
  })
};
