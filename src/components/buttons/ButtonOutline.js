import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/components/Buttons.scss';

export const ButtonOutline = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={styles.buttonOutline}
    />
  );
};

ButtonOutline.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};
ButtonOutline.defaultProps = {
  as: 'button'
};
