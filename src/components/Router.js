import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AnimationProvider} from './AnimationProvider';
import {Application} from './Application';
import {RouterProvider} from './RouterProvider';
import {ShoppingList} from './ShoppingList';

export const Router = () =>
  <RouterProvider>
    {
      ({location}) =>
        <AnimationProvider animationKey={location.key}>
          <Switch location={location}>
            <Route exact path='/' component={Application}/>
            <Route exact path='/shopping-list' component={ShoppingList}/>
          </Switch>
        </AnimationProvider>
    }
  </RouterProvider>;
