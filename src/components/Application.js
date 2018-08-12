import React from 'react';
import {Animation} from './providers/Animation';
import {RouteContextProvider} from './providers/RouteContext';
import {Router} from './providers/Router';
import {Store} from './providers/Store';
import {Router} from './Router';
import {Toasts} from './blocks/Toasts';

export const Application = () =>
  <Store>
    <Router>
      {
        routeProps =>
          <RouteContextProvider {...routeProps}>
            <Animation animationKey={routeProps.location.key}>
              <Router location={routeProps.location}/>
            </Animation>
            <Toasts/>
          </RouteContextProvider>
      }
    </Router>
  </Store>;
