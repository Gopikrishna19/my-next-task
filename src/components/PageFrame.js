import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/components/PageFrame.scss';
import {ProviderTheme} from './ProviderTheme';
import {TitleNavButton} from './TitleNavButton';

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

export class PageFrame extends React.Component {
  constructor() {
    super();

    this.state = {
      elevated: false
    };
  }

  render() {
    return (
      <ProviderTheme>
        <section className={`${styles.pageFrame } ${ this.props.pageAnimationClassName}`}>
          <header className={`${styles.header} ${this.state.elevated ? styles.elevated : ''}`}>
            <TitleNavButton button={this.props.titleNavButton}/>
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
        </section>
      </ProviderTheme>
    );
  }
}

PageFrame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  controls: PropTypes.any,
  pageAnimationClassName: PropTypes.string,
  title: PropTypes.string,
  titleNavButton: PropTypes.func
};
PageFrame.defaultProps = {
  className: '',
  hasBackButton: false,
  pageAnimationClassName: '',
  title: 'My Next Task'
};
