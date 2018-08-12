import React from 'react';
import animations from '../../styles/Animations.scss';
import {backButton} from '../../utils/buttons';
import {Card} from '../blocks/Card';
import {PageFrame} from '../blocks/PageFrame';
import {Action} from '../buttons/Action';
import {Add} from '../icons/Add';

export const ShoppingList = () =>
  <PageFrame
    controls={[
      <Action
        icon={Add}
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
            <Card>
              Shopping Item {index}
            </Card>
          </li>
        )
      }
    </ul>
  </PageFrame>;
