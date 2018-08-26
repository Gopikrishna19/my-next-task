import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideOldestToast} from '../../store/action-creators/toast';
import styles from '../../styles/Toasts.scss';
import {join} from '../../utils/class-names';

const animationTimeout = 300;
const charactersPerSecond = 15;
const defaultState = {
  activeClass: styles.entered,
  isTimersRunning: false
};
const toSecond = 1000;

class $Toasts extends Component {
  state = defaultState;

  startTimers = toast => {
    const timeout = toast.length / charactersPerSecond * toSecond;

    if (!this.state.isTimersRunning) {
      setTimeout(() => this.setState({activeClass: styles.entered}), animationTimeout);
      setTimeout(() => this.setState({activeClass: styles.exiting}), animationTimeout + timeout);
      setTimeout(() => {
        this.props.hideOldestToast();
        this.setState(defaultState);
      }, 2 * animationTimeout + timeout);
      setTimeout(() => this.setState({
        activeClass: join(styles.enter, styles.entering),
        isTimersRunning: true
      }));
    }
  };

  render() {
    const toast = this.props.toasts[0];

    if (toast) {
      this.startTimers(toast);

      return (
        <div className={join(styles.toast, this.state.activeClass)}>
          {toast}
        </div>
      );
    }

    return null;
  }
}

$Toasts.propTypes = {
  hideOldestToast: PropTypes.func.isRequired,
  toasts: PropTypes.array.isRequired
};

export const Toasts = connect(
  state => ({toasts: state.toasts}),
  {hideOldestToast}
)($Toasts);
