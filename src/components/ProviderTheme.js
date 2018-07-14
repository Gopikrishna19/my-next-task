import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/ThemeProvider.scss';
import {join} from '../utils/class-names';

const $ProviderTheme = props =>
  React.Children.map(
    props.children,
    child => React.cloneElement(child, {className: join(child.props.className, styles[props.theme])})
  );

$ProviderTheme.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.string.isRequired
};

export const ProviderTheme = connect(
  state => ({theme: state.theme})
)($ProviderTheme);
