import React from 'react';
import styles from '../styles/components/ShoppingList.scss';
import {PageFrame} from './PageFrame';
import {Card} from './Card';
import {Add} from './icons/Add';

export const ShoppingList = () =>
  <PageFrame
    pageAnimationClassName={styles.pageAnimation}
    backButtonLinkTo='/'
    controls={[
      <button
        className={styles.addButton}
        key='logout'
      >
        <Add/>
      </button>
    ]}
    hasBackButton={true}
    title='Shopping List'
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
