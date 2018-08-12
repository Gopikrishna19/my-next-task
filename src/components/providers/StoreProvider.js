import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {getStore} from '../../store/index';

export const StoreProvider = props =>
  <Provider store={getStore()}>
    {props.children}
  </Provider>;

StoreProvider.propTypes = {
  children: PropTypes.any
};
