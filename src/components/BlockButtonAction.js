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
      {Icon && <Icon className={iconStyles.iconBody}/>}
      {children && <span className={styles.buttonActionText}>{children}</span>}
    </Button>
  );
};

BlockButtonAction.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.any,
  icon: PropTypes.func
};
BlockButtonAction.defaultProps = {
  as: 'button'
};
