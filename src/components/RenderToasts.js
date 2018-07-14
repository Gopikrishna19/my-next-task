import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideOldestToast} from '../store/action-creators/toast';
import styles from '../styles/Toasts.scss';
import {join} from '../utils/class-names';
import {ProviderTheme} from './ProviderTheme';

const Timeout = 5000;
const AnimationTimeout = 300;
const defaultState = {
  activeClass: styles.entered,
  isTimersRunning: false
};

class $RenderToasts extends Component {
  removeToastAfterTime = () => setTimeout(() => {
    this.props.hideOldestToast();
  }, Timeout);

  startTimers = () => {
    if (!this.state.isTimersRunning) {
      setTimeout(() => this.setState({activeClass: styles.entered}), AnimationTimeout);
      setTimeout(() => this.setState({activeClass: styles.exiting}), AnimationTimeout + Timeout);
      setTimeout(() => {
        this.props.hideOldestToast();
        this.setState(defaultState);
      }, 2 * AnimationTimeout + Timeout);
      setTimeout(() => this.setState({
        activeClass: join(styles.enter, styles.entering),
        isTimersRunning: true
      }));
    }
  };

  constructor() {
    super();

    this.state = defaultState;
  }

  render() {
    const toast = this.props.toasts[0];

    if (toast) {
      this.startTimers();

      return (
        <ProviderTheme>
          <span className={join(styles.toast, this.state.activeClass)}>
            {toast}
          </span>
        </ProviderTheme>
      );
    }

    return null;
  }
}

$RenderToasts.propTypes = {
  hideOldestToast: PropTypes.func.isRequired,
  toasts: PropTypes.array.isRequired
};

export const RenderToasts = connect(
  state => ({toasts: state.toasts}),
  {hideOldestToast}
)($RenderToasts);