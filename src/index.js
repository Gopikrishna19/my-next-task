import React from 'react';
import {render} from 'react-dom';
import {auth} from './firebase';
import progressive from './progressive';
import './index.scss';

const host = document.getElementById('app');
let renderComponent;

if (build.mode === 'production') {
  progressive.registerWorker();

  renderComponent = Component => render(<Component/>, host);
} else {
  const {HotApp} = require('./HotApp');

  renderComponent = Component => render(<HotApp component={Component}/>, host);
}

progressive.removeLoader();

const getComponent = function (user) {
  let component;

  if (user && user.emailVerified) {
    component = import('./components/Application')
      .then(module => module.Application);
  } else {
    component = import('./components/Login')
      .then(module => module.Login);
  }

  return component;
};

auth().onAuthStateChanged(user => getComponent(user).then(renderComponent));
