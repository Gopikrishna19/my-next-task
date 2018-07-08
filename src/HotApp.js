import PropTypes from 'prop-types';
import React from 'react';
import {hot} from 'react-hot-loader';

const App = props =>
  <props.component/>;

App.propTypes = {
  component: PropTypes.any.isRequired
};

export const HotApp = hot(module)(App);
