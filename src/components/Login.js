import React from 'react';
import {auth} from '../firebase';

const handleClick = () => {
  const authProvider = new auth.GoogleAuthProvider();

  auth().signInWithPopup(authProvider);
};

export const Login = () =>
  <div>
    <button onClick={handleClick}>Login</button>
  </div>;
