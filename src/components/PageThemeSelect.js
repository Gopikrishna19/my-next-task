import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {themes} from '../state/themes';
import {onThemeChange} from '../store/action-creators/theme';
import animations from '../styles/Animations.scss';
import styles from '../styles/ThemeSelect.scss';
import {backButton} from '../utils/buttons';
import {BlockIconApply} from './BlockIconApply';
import {BlockRadio} from './BlockRadio';
import {PageFrame} from './PageFrame';

const $ThemeSelect = props =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    title='Select Theme'
    titleNavButtonProps={backButton(BlockIconApply)}
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
            <BlockRadio
              isSelected={theme === props.selectedTheme}
              onChange={props.onThemeChange}
              value={theme}
            >
              {theme.replace(/-/, ' ')}
            </BlockRadio>
          </li>
        )
      }
    </ul>
  </PageFrame>;

$ThemeSelect.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired
};

export const PageThemeSelect = connect(
  state => ({selectedTheme: state.theme}),
  {onThemeChange}
)($ThemeSelect);
