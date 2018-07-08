import React from 'react';
import {render} from 'react-dom';
import {auth} from './repository/firebase';

auth().onAuthStateChanged(async user => {
  if (user && user.emailVerified) {
    const {App} = await import('./App');

    render(<App/>, document.getElementById('app'));
  } else {
    const authProvider = new auth.GoogleAuthProvider();

    document.getElementById('app').innerHTML = 'Authenticating...';

    auth().signInWithPopup(authProvider);
  }
});
