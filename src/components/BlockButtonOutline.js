import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Buttons.scss';

export const BlockButtonOutline = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={styles.buttonOutline}
    />
  );
};

BlockButtonOutline.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};
BlockButtonOutline.defaultProps = {
  as: 'button'
};
