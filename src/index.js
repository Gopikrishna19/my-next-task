import React from 'react';
import {render} from 'react-dom';
import {auth, database} from './firebase';

const host = document.getElementById('app');
let renderComponent;

document.addEventListener('contextmenu', event => event.preventDefault());

if (build.mode === 'production') {
  renderComponent = ({Component, props}) => render(<Component {...props}/>, host);
} else {
  const {HotApp} = require('./HotApp');

  renderComponent = props => render(<HotApp {...props}/>, host);
}

document.getElementById('loader').remove();

const getComponent = function (user) {
  let component;

  if (user && user.emailVerified) {
    const users = database().ref('users');

    component = import('./components/Application')
      .then(async module => ({
        Component: module.Application,
        props: {
          user: await users.once('value').then(snapshot => snapshot.val()[user.uid])
        }
      }));
  } else {
    component = import('./components/pages/Login')
      .then(module => ({
        Component: module.Login
      }));
  }

  return component;
};

auth().onAuthStateChanged(user => getComponent(user).then(renderComponent));
