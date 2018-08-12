import React from 'react';
import {Toasts} from './blocks/Toasts';
import {AnimationProvider} from './providers/AnimationProvider';
import {RouteContextProvider} from './providers/RouteContextProvider';
import {RouterProvider} from './providers/RouterProvider';
import {StoreProvider} from './providers/StoreProvider';
import {Router} from './Router';

export const Application = () =>
  <StoreProvider>
    <RouterProvider>
      {
        routeProps =>
          <RouteContextProvider {...routeProps}>
            <AnimationProvider animationKey={routeProps.location.key}>
              <Router location={routeProps.location}/>
            </AnimationProvider>
            <Toasts/>
          </RouteContextProvider>
      }
    </RouterProvider>
  </StoreProvider>;
