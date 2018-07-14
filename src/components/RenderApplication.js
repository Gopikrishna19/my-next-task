import React from 'react';
import {ProviderAnimation} from './ProviderAnimation';
import {ProviderRouteContext} from './ProviderRouteContext';
import {ProviderRouter} from './ProviderRouter';
import {ProviderStore} from './ProviderStore';
import {RenderRouter} from './RenderRouter';

export const RenderApplication = () =>
  <ProviderStore>
    <ProviderRouter>
      {
        routeProps =>
          <ProviderRouteContext {...routeProps}>
            <ProviderAnimation animationKey={routeProps.location.key}>
              <RenderRouter location={routeProps.location}/>
            </ProviderAnimation>
          </ProviderRouteContext>
      }
    </ProviderRouter>
  </ProviderStore>;
