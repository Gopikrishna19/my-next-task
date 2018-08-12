import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

export const Router = props =>
  <BrowserRouter>
    <Route render={props.children}/>
  </BrowserRouter>;

Router.propTypes = {
  children: PropTypes.func.isRequired
};
