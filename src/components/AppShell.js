import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/AppShell.scss';
import {conditionalRequire} from '../utils/props';
import {Back} from './icons/Back';
import {Shell} from './icons/Shell';

export const AppShell = props =>
  <React.Fragment>
    <header className={`${styles.header} ${props.elevated ? styles.elevated : ''}`}>
      {
        props.hasBackButton ?
          <button
            className={styles.backButton}
            onClick={props.onBackButtonClick}
          >
            <Back/>
          </button> :
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
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.any,
  elevated: PropTypes.bool,
  hasBackButton: PropTypes.bool,
  onBackButtonClick: conditionalRequire(PropTypes.func, props => props.hasBackButton),
  title: PropTypes.string
};
AppShell.defaultProps = {
  elevated: true,
  hasBackButton: false,
  title: 'My Next Task'
};
