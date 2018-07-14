import PropTypes from 'prop-types';
import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const ProviderAnimation = props =>
  <TransitionGroup component={null}>
    <CSSTransition
      classNames='frame'
      key={props.animationKey}
      timeout={300}
    >
      {React.Children.only(props.children)}
    </CSSTransition>
  </TransitionGroup>;

ProviderAnimation.propTypes = {
  animationKey: PropTypes.string,
  children: PropTypes.node
};
ProviderAnimation.defaultProps = {
  animationKey: 'root'
};
