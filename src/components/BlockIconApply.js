import React from 'react';
import {iconPropTypes} from '../utils/prop-types';

export const BlockIconApply = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
  </svg>;

BlockIconApply.propTypes = iconPropTypes;
