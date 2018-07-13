import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {ProviderAnimation} from './ProviderAnimation';
import {ProviderRouter} from './ProviderRouter';
import {ProviderStore} from './ProviderStore';
import {ShoppingList} from './ShoppingList';
import {ThemeSelect} from './ThemeSelect';

export const Router = () =>
  <ProviderStore>
    <ProviderRouter>
      {
        ({location}) =>
          <ProviderAnimation animationKey={location.key}>
            <Switch location={location}>
              <Route exact path='/' component={Home}/>
              <Route exact path='/shopping-list' component={ShoppingList}/>
              <Route exact path='/theme-select' component={ThemeSelect}/>
            </Switch>
          </ProviderAnimation>
      }
    </ProviderRouter>
  </ProviderStore>;
