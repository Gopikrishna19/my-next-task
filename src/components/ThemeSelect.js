import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {onThemeChange} from '../store/action-creators/change-theme';
import {themes} from '../store/state/themes';
import animations from '../styles/components/Animations.scss';
import styles from '../styles/components/ThemeSelect.scss';
import {Apply} from './icons/Apply';
import {PageFrame} from './PageFrame';
import {Radio} from './Radio';

const $ThemeSelect = props =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    title='Select Theme'
    titleNavButtonProps={
      routeProps => ({
        icon: <Apply/>,
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
