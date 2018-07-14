import React from 'react';
import styles from '../styles/components/ShoppingList.scss';
import {BackNavButton} from './buttons/BackNavButton';
import {Card} from './Card';
import {Add} from './icons/Add';
import {PageFrame} from './PageFrame';

export const ShoppingList = () =>
  <PageFrame
    pageAnimationClassName={styles.pageAnimation}
    controls={[
      <button
        className={styles.addButton}
        key='logout'
      >
        <Add/>
      </button>
    ]}
    title='Shopping List'
    titleNavButton={BackNavButton}
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
