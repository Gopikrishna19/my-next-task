import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import styles from '../styles/components/Home.scss';
import {Logout} from './icons/Logout';
import {Theme} from './icons/Theme';
import {PageFrame} from './PageFrame';

const handleClick = () => auth().signOut();

export const Home = () =>
  <PageFrame
    className={styles.application}
    controls={[
      <Link
        className={styles.themeButton}
        key='theme'
        to='/theme-select'
      >
        <Theme/>
      </Link>,
      <button
        className={styles.logoutButton}
        key='logout'
        onClick={handleClick}
      >
        <Logout/>
      </button>
    ]}
  >
    <ul className={styles.menu}>
      <li>
        <Link
          className={styles.menuLink}
          to='/shopping-list'
        >
          Shopping List
        </Link>
      </li>
      <li>
        <a
          className={styles.menuLink}
          href="#">
          Todo List
        </a>
      </li>
    </ul>
  </PageFrame>;
