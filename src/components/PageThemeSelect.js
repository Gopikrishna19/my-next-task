import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {onThemeChange} from '../store/action-creators/change-theme';
import {themes} from '../store/state/themes';
import animations from '../styles/Animations.scss';
import styles from '../styles/ThemeSelect.scss';
import {BlockIconApply} from './BlockIconApply';
import {PageFrame} from './PageFrame';
import {BlockRadio} from './BlockRadio';

const $ThemeSelect = props =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    title='Select Theme'
    titleNavButtonProps={
      routeProps => ({
        icon: BlockIconApply,
        onClick: routeProps.history.goBack
      })
    }
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
