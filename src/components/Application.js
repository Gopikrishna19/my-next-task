import React from 'react';
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
        <a
          className={styles.menuLink}
          href="#">
          Shopping List
        </a>
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
