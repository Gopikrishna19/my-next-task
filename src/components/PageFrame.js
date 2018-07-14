import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/PageFrame.scss';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockButtonNav} from './BlockButtonNav';
import {ProviderTheme} from './ProviderTheme';

const setElevationOnScroll = (element, component) => {
  element.onscroll = () => {
    const elevated = element.scrollTop > 1;

    if (component.state.elevated !== elevated) {
      component.setState({elevated});
    }
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
        <section className={join(styles.pageFrame, this.props.pageAnimationClassName)}>
          <header className={join(styles.header, conditionalClassName(this.state.elevated, styles.elevated))}>
            <BlockButtonNav applyProps={this.props.titleNavButtonProps}/>
            <div className={styles.title}>
              {this.props.title}
            </div>
            {this.props.controls}
          </header>
          <main
            ref={setEvents(this)}
            className={join(this.props.className, styles.content)}
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
  titleNavButtonProps: PropTypes.func
};
PageFrame.defaultProps = {
  hasBackButton: false,
  title: 'My Next Task'
};
