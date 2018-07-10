import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Application} from './Application';
import {ShoppingList} from './ShoppingList';

export const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Application}/>
      <Route exact path='/shopping-list' component={ShoppingList}/>
    </Switch>
  </BrowserRouter>;
