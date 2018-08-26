import React from 'react';
import {iconPropTypes} from '../../utils/prop-types';

export const StatusShop = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"/>
  </svg>;

StatusShop.propTypes = iconPropTypes;
