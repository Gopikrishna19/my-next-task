import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/Card.scss';

export const Card = props =>
  <div className={styles.card}>
    {props.children}
  </div>;

Card.propTypes = {
  children: PropTypes.any.isRequired
};
