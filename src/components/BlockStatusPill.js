import React from 'react';
import styles from '../styles/Icons.scss';
import {join} from '../utils/class-names';
import {iconPropTypes} from '../utils/propTypes';

export const BlockStatusPill = props =>
  <div className={join(styles.iconStatus, props.className)} />;

BlockStatusPill.propTypes = iconPropTypes;
