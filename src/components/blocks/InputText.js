import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/Form.scss';
import {noOp} from '../../utils/helpers';

const handleEnter = (onEnter, onKeyUp) => event => {
  onKeyUp(event);
  if (event.nativeEvent.key === 'Enter') {
    onEnter(event);
  }
};

export const InputText = React.forwardRef((props, ref) => {
  const {onEnter, onKeyUp, placeholder, ...rest} = props;

  return (
    <label className={styles.inputTextWrapper}>
      <input
        {...rest}
        className={styles.inputText}
        onKeyUp={handleEnter(onEnter, onKeyUp)}
        ref={ref}
        required
      />
      <span className={styles.inputTextPlaceholder}>{placeholder}</span>
    </label>
  );
});

InputText.propTypes = {
  onEnter: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string
};
InputText.defaultProps = {
  onEnter: noOp,
  onKeyUp: noOp
};
