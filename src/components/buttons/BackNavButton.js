import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/components/BackNavButton.scss';
import {Back} from '../icons/Back';

export const BackNavButton = props =>
  <button
    className={styles.backNavButton}
    onClick={props.history.goBack}
  >
    <Back/>
  </button>;

BackNavButton.propTypes = {
  history: PropTypes.object.isRequired
};
