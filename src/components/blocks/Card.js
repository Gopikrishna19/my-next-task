import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/Card.scss';
import {join} from '../../utils/class-names';

export const Card = props =>
  <div className={join(styles.card, props.className)}>
    {props.children}
  </div>;

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};
