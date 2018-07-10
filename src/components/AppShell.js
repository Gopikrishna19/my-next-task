import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/components/AppShell.scss';
import {conditionalRequire} from '../utils/props';
import {Back} from './icons/Back';
import {Shell} from './icons/Shell';

const setElevationOnScroll = (element, component) => {
  element.onscroll = () => {
    component.setState({elevated: element.scrollTop > 1});
  };
};

const setFocus = element => {
  element.focus();
};

const setEvents = component => element => {
  if (element) {
    setFocus(element);
    setElevationOnScroll(element, component);
  }
};

export class AppShell extends React.Component {
  constructor() {
    super();

    this.state = {
      elevated: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <header className={`${styles.header} ${this.state.elevated ? styles.elevated : ''}`}>
          {
            this.props.hasBackButton ?
              <Link
                className={styles.backButton}
                to={this.props.backButtonLinkTo}
              >
                <Back/>
              </Link> :
              <Shell/>
          }
          <div className={styles.title}>
            {this.props.title}
          </div>
          {this.props.controls}
        </header>
        <main
          ref={setEvents(this)}
          className={`${this.props.className} ${styles.content}`}
          tabIndex={-1}
        >
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

AppShell.propTypes = {
  backButtonLinkTo: conditionalRequire(PropTypes.string, props => props.hasBackButton),
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.any,
  hasBackButton: PropTypes.bool,
  title: PropTypes.string
};
AppShell.defaultProps = {
  hasBackButton: false,
  title: 'My Next Task'
};
