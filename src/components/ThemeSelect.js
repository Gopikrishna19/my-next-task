import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {onThemeChange} from '../store/action-creators/change-theme';
import {themes} from '../store/state/themes';
import styles from '../styles/components/ThemeSelect.scss';
import {PageFrame} from './PageFrame';
import {Radio} from './Radio';

const $ThemeSelect = props =>
  <PageFrame
    pageAnimationClassName={styles.pageAnimation}
    backButtonLinkTo='/'
    hasBackButton={true}
    title='Select Theme'
  >
    <ul style={{
      listStyle: 'none',
      padding: 0
    }}>
      {
        themes.map((theme, index) =>
          <li
            className={styles.themeOption}
            key={index}
          >
            <Radio
              isSelected={theme === props.selectedTheme}
              onChange={props.onThemeChange}
              value={theme}
            >
              {theme.replace(/-/, ' ')}
            </Radio>
          </li>
        )
      }
    </ul>
  </PageFrame>;

$ThemeSelect.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired
};

export const ThemeSelect = connect(
  state => ({selectedTheme: state.theme}),
  {onThemeChange}
)($ThemeSelect);
