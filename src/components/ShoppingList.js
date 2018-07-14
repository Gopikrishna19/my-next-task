import React from 'react';
import animations from '../styles/components/Animations.scss';
import {ButtonAction} from './buttons/ButtonAction';
import {Card} from './Card';
import {Add} from './icons/Add';
import {Back} from './icons/Back';
import {PageFrame} from './PageFrame';

export const ShoppingList = () =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    controls={[
      <ButtonAction key='add'>
        <Add/>
      </ButtonAction>
    ]}
    title='Shopping List'
    titleNavButtonProps={
      routeProps => ({
        icon: <Back/>,
        onClick: routeProps.history.goBack
      })
    }
  >
    <ul style={{
      listStyle: 'none',
      padding: 0
    }}>
      {
        Array.from({length: 100}).map((_, index) =>
          <li key={index}>
            <Card>
              Shopping Item {index}
            </Card>
          </li>
        )
      }
    </ul>
  </PageFrame>;
