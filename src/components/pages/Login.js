import React from 'react';
import {auth} from '../../firebase/index';
import {getStore} from '../../store/index';
import styles from '../../styles/Login.scss';
import {PageFrame} from '../blocks/PageFrame';
import {Outline} from '../buttons/Outline';
import {StoreProvider} from '../providers/StoreProvider';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(authProvider)
    .catch(() => null);
};

export const Login = () =>
  <StoreProvider store={getStore()}>
    <PageFrame className={styles.login}>
      <Outline onClick={handleClick}>Login</Outline>
    </PageFrame>
  </StoreProvider>;
