import React from 'react';
import {AppShell} from './AppShell';
import {Card} from './Card';

export const ShoppingList = () =>
  <AppShell
    backButtonLinkTo='/'
    elevated={true}
    hasBackButton={true}
  >
    <ul style={{
      listStyle: 'none',
      padding: 0
    }}>
      {
        Array.from({length: 100}).map((_, index) =>
          <Card key={index}>
            Shopping Item {index}
          </Card>
        )
      }
    </ul>
  </AppShell>;
