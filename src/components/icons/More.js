import React from 'react';
import {iconPropTypes} from '../../utils/prop-types';

export const More = props =>
  <svg className={props.className} viewBox="0 0 24 24">
    <path
      d={`
        M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1
        12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z
      `}
    />
  </svg>;

More.propTypes = iconPropTypes;
