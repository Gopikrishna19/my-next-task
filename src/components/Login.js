import React from 'react';
import {auth} from '../firebase';
import styles from '../styles/Login.scss';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const Login = () =>
  <div className={styles.login}>
    <button
      className={styles.loginButton}
      onClick={handleClick}>Login
    </button>
  </div>;
