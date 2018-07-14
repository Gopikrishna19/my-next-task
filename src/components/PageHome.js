import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import styles from '../styles/Home.scss';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockButtonOutline} from './BlockButtonOutline';
import {BlockIconLogout} from './BlockIconLogout';
import {BlockIconTheme} from './BlockIconTheme';
import {PageFrame} from './PageFrame';

const handleClick = () => auth().signOut();

export const PageHome = () =>
  <PageFrame
    className={styles.pageFrame}
    controls={[
      <BlockButtonAction
        as={Link}
        icon={BlockIconTheme}
        key='theme'
        to='/theme-select'
      />,
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
          to='/list-shopping'
        >
          Shopping List
        </BlockButtonOutline>
      </li>
      <li>
        <BlockButtonOutline
          as='a'
          href="#"
        >
          Todo List
        </BlockButtonOutline>
      </li>
    </ul>
  </PageFrame>;
