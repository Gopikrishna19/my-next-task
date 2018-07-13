import React from 'react';
import {auth} from '../firebase';
import styles from '../styles/components/Login.scss';
import {PageFrame} from './PageFrame';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const Login = () =>
  <PageFrame className={styles.login}>
    <button
      className={styles.loginButton}
      onClick={handleClick}>Login
    </button>
  </PageFrame>;
