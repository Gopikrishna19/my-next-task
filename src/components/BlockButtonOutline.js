import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Buttons.scss';
import {join} from '../utils/class-names';

export const BlockButtonOutline = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={join(styles.buttonOutline, rest.className)}
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
