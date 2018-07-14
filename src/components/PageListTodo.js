import React from 'react';
import animations from '../styles/Animations.scss';
import {backButton} from '../utils/buttons';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockCard} from './BlockCard';
import {BlockIconAdd} from './BlockIconAdd';
import {PageFrame} from './PageFrame';

export const PageListTodo = () =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    controls={[
      <BlockButtonAction
        icon={BlockIconAdd}
        key='add'
      />
    ]}
    title='Todo List'
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
              Todo Item {index}
            </BlockCard>
          </li>
        )
      }
    </ul>
  </PageFrame>;
