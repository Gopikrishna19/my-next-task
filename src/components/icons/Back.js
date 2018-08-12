import React from 'react';
import {iconPropTypes} from '../../utils/prop-types';

export const Back = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
  </svg>;

Back.propTypes = iconPropTypes;