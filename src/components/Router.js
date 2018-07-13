import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {ProviderAnimation} from './ProviderAnimation';
import {ProviderRouter} from './ProviderRouter';
import {ProviderStore} from './ProviderStore';
import {ShoppingList} from './ShoppingList';

export const Router = () =>
  <ProviderStore>
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
    </ProviderRouter>
  </ProviderStore>;
