import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Buttons.scss';

export const BlockButtonNoFootprint = props => {
  const {as: Button, ...rest} = props;

  return (
    <Button
      {...rest}
      className={styles.buttonNoFootprint}
    />
  );
};

BlockButtonNoFootprint.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};
BlockButtonNoFootprint.defaultProps = {
  as: 'button'
};
