import PropTypes from 'prop-types';
import React from 'react';

export const RouteContext = React.createContext({
  history: {},
  location: {}
});

export const RouteContextProvider = props =>
  <RouteContext.Provider value={{
    history: props.history,
    location: props.location
  }}>
    {props.children}
  </RouteContext.Provider>;

RouteContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
