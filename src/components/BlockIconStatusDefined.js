import React from 'react';
import {iconPropTypes} from '../utils/propTypes';

export const BlockIconStatusDefined = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z"/>
  </svg>;

BlockIconStatusDefined.propTypes = iconPropTypes;