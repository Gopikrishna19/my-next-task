import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import themes from '../styles/Themes.scss';
import styles from '../styles/ThemeProvider.scss';
import {join} from '../utils/class-names';

const $ProviderTheme = props =>
  <div className={join(themes[props.theme], styles.wrapper)}>
    {props.children}
  </div>;

$ProviderTheme.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.string.isRequired
};

export const ProviderTheme = connect(
  state => ({theme: state.theme})
)($ProviderTheme);
