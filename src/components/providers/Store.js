import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {getStore} from '../../store/index';

export const Store = props =>
  <Provider store={getStore()}>
    {props.children}
  </Provider>;

Store.propTypes = {
  children: PropTypes.any
};
