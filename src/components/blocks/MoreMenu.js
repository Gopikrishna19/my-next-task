import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../../styles/MoreMenu.scss';
import {Action} from '../buttons/Action';
import {More} from '../icons/More';

export class MoreMenu extends Component {
  state = {
    isOpen: false
  };

  closeMenu = () => this.setState({isOpen: false});

  openMenu = () => this.setState({isOpen: true});

  render() {
    return (
      <React.Fragment>
        <Action
          icon={More}
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

MoreMenu.propTypes = {children: PropTypes.any};
