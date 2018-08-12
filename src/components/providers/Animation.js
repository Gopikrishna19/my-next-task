import PropTypes from 'prop-types';
import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const Animation = props =>
  <TransitionGroup component={null}>
    <CSSTransition
      classNames='frame'
      key={props.animationKey}
      timeout={300}
    >
      {React.Children.only(props.children)}
    </CSSTransition>
  </TransitionGroup>;

Animation.propTypes = {
  animationKey: PropTypes.string,
  children: PropTypes.node
};
Animation.defaultProps = {
  animationKey: 'root'
};
