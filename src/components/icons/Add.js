import React from 'react';
import {iconPropTypes} from '../../utils/prop-types';

export const Add = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
  </svg>;

Add.propTypes = iconPropTypes;
