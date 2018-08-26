import React from 'react';
import {iconPropTypes} from '../../utils/prop-types';

export const Shop = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"/>
  </svg>;

Shop.propTypes = iconPropTypes;
