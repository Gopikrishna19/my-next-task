import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import styles from '../styles/components/Home.scss';
import {ButtonAction} from './buttons/ButtonAction';
import {ButtonOutline} from './buttons/ButtonOutline';
import {Logout} from './icons/Logout';
import {Theme} from './icons/Theme';
import {PageFrame} from './PageFrame';

const handleClick = () => auth().signOut();

export const Home = () =>
  <PageFrame
    className={styles.pageFrame}
    controls={[
      <ButtonAction as={Link}
        key='theme'
        to='/theme-select'
      >
        <Theme/>
      </ButtonAction>,
      <ButtonAction
        key='logout'
        onClick={handleClick}
      >
        <Logout/>
      </ButtonAction>
    ]}
  >
    <ul className={styles.menu}>
      <li>
        <ButtonOutline
          as={Link}
          to='/shopping-list'
        >
          Shopping List
        </ButtonOutline>
      </li>
      <li>
        <ButtonOutline
          as='a'
          href="#"
        >
          Todo List
        </ButtonOutline>
      </li>
    </ul>
  </PageFrame>;
