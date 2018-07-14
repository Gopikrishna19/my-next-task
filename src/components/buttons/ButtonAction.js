import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/components/Buttons.scss';
import iconStyles from '../../styles/components/Icons.scss';

export const ButtonAction = props => {
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

ButtonAction.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.any,
  icon: PropTypes.func.isRequired
};
ButtonAction.defaultProps = {
  as: 'button'
};
