import React from 'react';
import {render} from 'react-dom';
import {auth} from './firebase';
import './progressive';

const renderComponent = Component => render(<Component/>, document.getElementById('app'));

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
