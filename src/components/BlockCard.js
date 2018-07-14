import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Card.scss';

export const BlockCard = props =>
  <div className={styles.card}>
    {props.children}
  </div>;

BlockCard.propTypes = {
  children: PropTypes.any.isRequired
};
