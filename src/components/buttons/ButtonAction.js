import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../styles/components/Buttons.scss';
import iconStyles from '../../styles/components/Icons.scss';

export const ButtonAction = props => {
  const {as: Button, children, ...rest} = props;
  const icon = React.cloneElement(
    React.Children.only(children),
    {className: iconStyles.iconBody}
  );

  return (
    <Button
      {...rest}
      className={styles.buttonAction}
    >
      {icon}
    </Button>
  );
};

ButtonAction.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  children: PropTypes.any
};
ButtonAction.defaultProps = {
  as: 'button'
};
