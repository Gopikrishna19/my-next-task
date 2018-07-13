import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ProviderAnimation} from './ProviderAnimation';
import {Home} from './Home';
import {ProviderRouter} from './ProviderRouter';
import {ShoppingList} from './ShoppingList';

export const Router = () =>
  <ProviderRouter>
    {
      ({location}) =>
        <ProviderAnimation animationKey={location.key}>
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/shopping-list' component={ShoppingList}/>
          </Switch>
        </ProviderAnimation>
    }
  </ProviderRouter>;
