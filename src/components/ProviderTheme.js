import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/components/ThemeProvider.scss';

const $ProviderTheme = props =>
  React.Children.map(
    props.children,
    child => React.cloneElement(child, {className: `${child.props.className} ${styles[props.theme]}`})
  );

$ProviderTheme.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.string.isRequired
};

export const ProviderTheme = connect(state => ({theme: state.theme}))($ProviderTheme);
