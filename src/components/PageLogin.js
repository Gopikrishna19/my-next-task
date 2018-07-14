import React from 'react';
import {auth} from '../firebase';
import {getStore} from '../store';
import styles from '../styles/Login.scss';
import {BlockButtonOutline} from './BlockButtonOutline';
import {PageFrame} from './PageFrame';
import {ProviderStore} from './ProviderStore';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const PageLogin = () =>
  <ProviderStore store={getStore()}>
    <PageFrame className={styles.login}>
      <BlockButtonOutline onClick={handleClick}>Login</BlockButtonOutline>
    </PageFrame>
  </ProviderStore>;
