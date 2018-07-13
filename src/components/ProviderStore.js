import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {getStore} from '../store';

export const ProviderStore = props =>
  <Provider store={getStore()}>
    {props.children}
  </Provider>;

ProviderStore.propTypes = {
  children: PropTypes.any
};
