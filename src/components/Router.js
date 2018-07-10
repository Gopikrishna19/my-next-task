import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Application} from './Application';

export const Router = () =>
  <BrowserRouter>
    <Route exact path='/' component={Application}/>
  </BrowserRouter>;
