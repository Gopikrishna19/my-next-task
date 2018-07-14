import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Buttons.scss';
import iconStyles from '../styles/Icons.scss';

export const BlockButtonAction = props => {
  const {as: Button, icon: Icon, children, ...rest} = props;

  return (
    <Button
      {...rest}
      className={styles.buttonAction}
    >
      <Icon className={iconStyles.iconBody}/>
      {children}
    </Button>
  );
};

BlockButtonAction.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.any,
  icon: PropTypes.func.isRequired
};
BlockButtonAction.defaultProps = {
  as: 'button'
};
