import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Card.scss';
import {join} from '../utils/class-names';

export const BlockCard = props =>
  <div className={join(styles.card, props.className)}>
    {props.children}
  </div>;

BlockCard.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};
