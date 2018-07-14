import React from 'react';
import animations from '../styles/Animations.scss';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockCard} from './BlockCard';
import {BlockIconAdd} from './BlockIconAdd';
import {BlockIconBack} from './BlockIconBack';
import {PageFrame} from './PageFrame';

export const PageListShopping = () =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    controls={[
      <BlockButtonAction
        icon={BlockIconAdd}
        key='add'
      />
    ]}
    title='Shopping List'
    titleNavButtonProps={
      routeProps => ({
        icon: BlockIconBack,
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
            <BlockCard>
              Shopping Item {index}
            </BlockCard>
          </li>
        )
      }
    </ul>
  </PageFrame>;
