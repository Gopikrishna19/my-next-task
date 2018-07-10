import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import styles from '../styles/components/Application.scss';
import {AppShell} from './AppShell';
import {Logout} from './icons/Logout';

const handleClick = () => auth().signOut();

export const Application = () =>
  <AppShell
    className={styles.application}
    controls={[
      <button
        className={styles.logoutButton}
        key='logout'
        onClick={handleClick}
      >
        <Logout/>
      </button>
    ]}
    elevated={false}
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
  </AppShell>;
