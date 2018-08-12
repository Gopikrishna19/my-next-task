import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/Buttons.scss';
import {join} from '../../utils/class-names';

export const Outline = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={join(styles.buttonOutline, rest.className)}
    />
  );
};

Outline.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};
Outline.defaultProps = {
  as: 'button'
};
