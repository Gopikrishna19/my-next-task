import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import {pages} from '../state/routes';
import styles from '../styles/Home.scss';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockButtonOutline} from './BlockButtonOutline';
import {BlockIconLogout} from './BlockIconLogout';
import {PageFrame} from './PageFrame';

const handleClick = () => auth().signOut();

export const PageHome = () =>
  <PageFrame
    className={styles.pageFrame}
    controls={[
      <BlockButtonAction
        icon={BlockIconLogout}
        key='logout'
        onClick={handleClick}
      />
    ]}
  >
    <ul className={styles.menu}>
      <li>
        <BlockButtonOutline
          as={Link}
          to={pages.listShopping}
        >
          Shopping List
        </BlockButtonOutline>
      </li>
      <li>
        <BlockButtonOutline
          as={Link}
          to={pages.listTodo}
        >
          Todo List
        </BlockButtonOutline>
      </li>
    </ul>
  </PageFrame>;
