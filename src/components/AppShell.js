import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/components/AppShell.scss';
import {conditionalRequire} from '../utils/props';
import {Back} from './icons/Back';
import {Shell} from './icons/Shell';

export const AppShell = props =>
  <React.Fragment>
    <header className={`${styles.header} ${props.elevated ? styles.elevated : ''}`}>
      {
        props.hasBackButton ?
          <Link
            className={styles.backButton}
            to={props.backButtonLinkTo}
          >
            <Back/>
          </Link> :
          <Shell/>
      }
      <div className={styles.title}>
        {props.title}
      </div>
      {props.controls}
    </header>
    <main className={`${props.className} ${styles.content}`}>
      {props.children}
    </main>
  </React.Fragment>;

AppShell.propTypes = {
  backButtonLinkTo: conditionalRequire(PropTypes.string, props => props.hasBackButton),
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.any,
  elevated: PropTypes.bool,
  hasBackButton: PropTypes.bool,
  title: PropTypes.string
};
AppShell.defaultProps = {
  elevated: true,
  hasBackButton: false,
  title: 'My Next Task'
};
