import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/Trinkets.scss';
import {join} from '../../utils/class-names';

export const ListSplitter = props =>
  props.title ?
    <div className={join(styles.listSplitter, props.className)}>
      {props.title}
    </div> : null;

ListSplitter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};
