import React from 'react';
import {ProviderAnimation} from './ProviderAnimation';
import {ProviderRouteContext} from './ProviderRouteContext';
import {ProviderRouter} from './ProviderRouter';
import {ProviderStore} from './ProviderStore';
import {ProviderTheme} from './ProviderTheme';
import {RenderRouter} from './RenderRouter';
import {RenderToasts} from './RenderToasts';

export const RenderApplication = () =>
  <ProviderStore>
    <ProviderTheme>
      <ProviderRouter>
        {
          routeProps =>
            <ProviderRouteContext {...routeProps}>
              <ProviderAnimation animationKey={routeProps.location.key}>
                <RenderRouter location={routeProps.location}/>
              </ProviderAnimation>
              <RenderToasts/>
            </ProviderRouteContext>
        }
      </ProviderRouter>
    </ProviderTheme>
  </ProviderStore>;
