import React from 'react';
import {auth} from '../firebase';
import {getStore} from '../store';
import styles from '../styles/components/Login.scss';
import {PageFrame} from './PageFrame';
import {ProviderStore} from './ProviderStore';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const Login = () =>
  <ProviderStore store={getStore()}>
    <PageFrame className={styles.login}>
      <button
        className={styles.loginButton}
        onClick={handleClick}>Login
      </button>
    </PageFrame>
  </ProviderStore>;
