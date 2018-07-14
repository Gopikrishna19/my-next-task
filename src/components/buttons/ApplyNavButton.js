import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/components/ApplyNavButton.scss';
import {Apply} from '../icons/Apply';

export const ApplyNavButton = props =>
  <button
    className={styles.applyNavButton}
    onClick={props.history.goBack}
  >
    <Apply/>
  </button>;

ApplyNavButton.propTypes = {
  history: PropTypes.object.isRequired
};
