import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Application} from './Application';
import {ShoppingList} from './ShoppingList';

export const Router = () =>
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={Application}/>
      <Route exact path='/shopping-list' component={ShoppingList}/>
    </React.Fragment>
  </BrowserRouter>;
