import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import {auth} from './repository/firebase';

auth().onAuthStateChanged(user => {
  if (user && user.emailVerified) {
    render(<App/>, document.getElementById('app'));
  } else {
    const authProvider = new auth.GoogleAuthProvider();

    document.getElementById('app').innerHTML = 'Authenticating...';

    auth().signInWithPopup(authProvider);
  }
});
