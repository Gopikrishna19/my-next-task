import React from 'react';
import animations from '../styles/Animations.scss';
import {backButton} from '../utils/buttons';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockCard} from './BlockCard';
import {BlockIconAdd} from './BlockIconAdd';
import {PageFrame} from './PageFrame';

export const PageListShopping = () =>
  <PageFrame
    controls={[
      <BlockButtonAction
        icon={BlockIconAdd}
        key='add'
      />
    ]}
    pageAnimationClassName={animations.slideIn}
    title='Shopping List'
    titleNavButtonProps={backButton()}
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
