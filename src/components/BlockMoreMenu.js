import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/MoreMenu.scss';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockIconMore} from './BlockIconMore';

export class BlockMoreMenu extends Component {
  state = {
    isOpen: false
  };

  closeMenu = () => this.setState({isOpen: false});

  openMenu = () => this.setState({isOpen: true});

  render() {
    return (
      <React.Fragment>
        <BlockButtonAction
          icon={BlockIconMore}
          onClick={this.openMenu}
        />
        {
          this.state.isOpen ? [
            <div
              className={styles.backDrop}
              key='backdrop'
              onClick={this.closeMenu}
            />,
            <div className={styles.moreMenu} key='menu'>
              {this.props.children}
            </div>
          ] : null
        }
      </React.Fragment>
    );
  }
}

BlockMoreMenu.propTypes = {children: PropTypes.any};
