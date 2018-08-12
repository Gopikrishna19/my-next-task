import React from 'react';
import {render} from 'react-dom';
import {auth} from './firebase';

const host = document.getElementById('app');
let renderComponent;

document.addEventListener('contextmenu', event => event.preventDefault());

if (build.mode === 'production') {
  renderComponent = Component => render(<Component/>, host);
} else {
  const {HotApp} = require('./HotApp');

  renderComponent = Component => render(<HotApp component={Component}/>, host);
}

document.getElementById('loader').remove();

const getComponent = function (user) {
  let component;

  if (user && user.emailVerified) {
    component = import('./components/Application')
      .then(module => module.Application);
  } else {
    component = import('./components/pages/Login')
      .then(module => module.Login);
  }

  return component;
};

auth().onAuthStateChanged(user => getComponent(user).then(renderComponent));
