import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Radio.scss';
import {noOp} from '../utils/helpers';

const handleChange = props => event => props.onChange(event.target.value);

export const BlockRadio = props =>
  <label className={styles.radio}>
    <input
      checked={props.isSelected}
      onChange={handleChange(props)}
      type='radio'
      value={props.value}
    />
    <svg className={styles.radioIcon} viewBox="0 0 24 24">
      <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
      {props.isSelected && <path d="M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>}
    </svg>
    {props.children}
  </label>;

BlockRadio.propTypes = {
  children: PropTypes.any.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired
};
BlockRadio.defaultProps = {
  onChange: noOp
};
