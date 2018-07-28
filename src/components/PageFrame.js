import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/PageFrame.scss';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockButtonNav} from './BlockButtonNav';

export class PageFrame extends Component {
  setElevationOnScroll = element => {
    element.onscroll = () => {
      const elevated = element.scrollTop > 1;

      if (this.state.elevated !== elevated) {
        this.setState({elevated});
      }
    };
  };

  setFocus = element => {
    if (!this.props.requestFocus) {
      element.focus();
    }
  };

  setEvents = element => {
    if (element) {
      this.setFocus(element);
      this.setElevationOnScroll(element);
    }
  };

  constructor() {
    super();

    this.state = {
      elevated: false
    };
  }

  render() {
    return (
      <section className={join(styles.pageFrame, this.props.pageAnimationClassName)}>
        <header className={join(styles.header, conditionalClassName(this.state.elevated, styles.elevated))}>
          <BlockButtonNav applyProps={this.props.titleNavButtonProps}/>
          <div className={styles.title}>
            {this.props.title}
          </div>
          {this.props.controls}
        </header>
        <main
          ref={this.setEvents}
          className={join(this.props.className, styles.content)}
          tabIndex={-1}
        >
          {this.props.children}
        </main>
      </section>
    );
  }
}

PageFrame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.any,
  pageAnimationClassName: PropTypes.string,
  requestFocus: PropTypes.bool,
  title: PropTypes.string,
  titleNavButtonProps: PropTypes.func
};
PageFrame.defaultProps = {
  hasBackButton: false,
  requestFocus: false,
  title: 'My Next Task'
};
