import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

export const ProviderRouter = props =>
  <BrowserRouter>
    <Route render={props.children}/>
  </BrowserRouter>;

ProviderRouter.propTypes = {
  children: PropTypes.func.isRequired
};
