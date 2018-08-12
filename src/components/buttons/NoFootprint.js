import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/Buttons.scss';
import {join} from '../../utils/class-names';

export const NoFootprint = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={join(styles.buttonNoFootprint, rest.className)}
    />
  );
};

NoFootprint.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};
NoFootprint.defaultProps = {
  as: 'button'
};
