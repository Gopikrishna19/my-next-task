import PropTypes from 'prop-types';
import React from 'react';
import {hot} from 'react-hot-loader';

const App = props =>
  <props.Component {...props.props}/>;

App.propTypes = {
  Component: PropTypes.any.isRequired,
  props: PropTypes.object
};

export const HotApp = hot(module)(App);
