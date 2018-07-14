import PropTypes from 'prop-types';
import React from 'react';

export const RouteContext = React.createContext({
  history: {},
  location: {}
});

export const ProviderRouteContext = props =>
  <RouteContext.Provider value={{
    history: props.history,
    location: props.location
  }}>
    {props.children}
  </RouteContext.Provider>;

ProviderRouteContext.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
