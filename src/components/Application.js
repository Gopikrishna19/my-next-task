import PropTypes from 'prop-types';
import React from 'react';
import {Toasts} from './blocks/Toasts';
import {AnimationProvider} from './providers/AnimationProvider';
import {RouteContextProvider} from './providers/RouteContextProvider';
import {RouterProvider} from './providers/RouterProvider';
import {StoreProvider} from './providers/StoreProvider';
import {UserProvider} from './providers/UserProvider';
import {Router} from './Router';

export const Application = props =>
  <StoreProvider>
    <UserProvider user={props.user}>
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
    </UserProvider>
  </StoreProvider>;

Application.propTypes = {
  user: PropTypes.string.isRequired
};
