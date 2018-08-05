import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Buttons.scss';
import iconStyles from '../styles/Icons.scss';
import {join} from '../utils/class-names';

export const BlockButtonMenuItem = props => {
  const {as: Button, icon: Icon, iconClassName, children, ...rest} = props;

  return (
    <Button
      {...rest}
      className={join(styles.buttonMenuItem, rest.className)}
    >
      {Icon && <Icon className={join(iconStyles.iconMenu, iconClassName)}/>}
      {children && <span className={styles.buttonMenuItemText}>{children}</span>}
    </Button>
  );
};

BlockButtonMenuItem.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.any,
  icon: PropTypes.func,
  iconClassName: PropTypes.string,
};
BlockButtonMenuItem.defaultProps = {
  as: 'button'
};
