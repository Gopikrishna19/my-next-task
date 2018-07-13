import PropTypes from 'prop-types';
import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const AnimationProvider = props =>
  <TransitionGroup component={null}>
    <CSSTransition
      classNames='frame'
      key={props.animationKey}
      timeout={300}
    >
      {React.Children.only(props.children)}
    </CSSTransition>
  </TransitionGroup>;

AnimationProvider.propTypes = {
  animationKey: PropTypes.string,
  children: PropTypes.node
};
AnimationProvider.defaultProps = {
  animationKey: 'root'
};
