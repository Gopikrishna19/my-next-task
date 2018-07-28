import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Trinkets.scss';
import {join} from '../utils/class-names';

export const BlockListSplitter = props =>
  <div className={join(styles.listSplitter, props.className)}>
    {props.title}
  </div>;

BlockListSplitter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
