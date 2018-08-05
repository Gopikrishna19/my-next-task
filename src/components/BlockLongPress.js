import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/Trinkets.scss';

const longPressTimeout = 500;
const vibrateDuration = 20;

export class BlockLongPress extends Component {
  timer = null;

  clearTimer = () => {
    clearTimeout(this.timer);
    this.timer = null;
  };

  click = () => {
    if (this.props.isDisabled) {
      this.props.onClick();
    }
  };

  startPressing = () => {
    if (!this.props.isDisabled && !this.timer) {
      this.timer = setTimeout(
        () => {
          navigator.vibrate(vibrateDuration);
          this.props.onLongClick();
        },
        longPressTimeout
      );
    }
  };

  stopPressing = () => {
    if (this.timer) {
      this.clearTimer();
    }
  };

  render() {
    return (
      <div
        className={styles.noUserSelect}
        onClick={this.click}
        onMouseDown={this.startPressing}
        onMouseUp={this.stopPressing}
        onTouchEnd={this.stopPressing}
        onTouchStart={this.startPressing}
      >
        {this.props.children}
      </div>
    );
  }
}

BlockLongPress.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onLongClick: PropTypes.func.isRequired
};
