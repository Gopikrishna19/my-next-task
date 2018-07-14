import PropTypes from 'prop-types';
import React from 'react';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockIconShell} from './BlockIconShell';
import {RouteContext} from './ProviderRouteContext';

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
