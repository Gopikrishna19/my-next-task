import React from 'react';
import {auth} from '../firebase';
import styles from '../styles/components/Login.scss';
import {AppShell} from './AppShell';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const Login = () =>
  <AppShell
    className={styles.login}
    elevated={false}
  >
    <button
      className={styles.loginButton}
      onClick={handleClick}>Login
    </button>
  </AppShell>;
