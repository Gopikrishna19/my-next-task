import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Trinkets.scss';
import {join} from '../utils/class-names';

export const BlockListSplitter = props =>
  props.title ?
    <div className={join(styles.listSplitter, props.className)}>
      {props.title}
    </div> : null;

BlockListSplitter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};
