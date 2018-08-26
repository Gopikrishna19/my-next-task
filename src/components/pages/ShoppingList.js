import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../../state/routes';
import {StoreType} from '../../state/ShoppingItems';
import * as actionCreators from '../../store/action-creators/shopping-item';
import animations from '../../styles/Animations.scss';
import iconStyles from '../../styles/Icons.scss';
import styles from '../../styles/ShoppingItems.scss';
import {backButton} from '../../utils/buttons';
import {conditionalClassName, join} from '../../utils/class-names';
import {GroupBy} from '../blocks/GroupBy';
import {MoreMenu} from '../blocks/MoreMenu';
import {PageFrame} from '../blocks/PageFrame';
import {ShoppingItem} from '../blocks/ShoppingItem';
import {Action} from '../buttons/Action';
import {MenuItem} from '../buttons/MenuItem';
import {Add} from '../icons/Add';
import {Cancel} from '../icons/Cancel';
import {Delete} from '../icons/Delete';
import {Group} from '../icons/Group';
import {SelectAll} from '../icons/SelectAll';
import {StatusCompleted} from '../icons/StatusCompleted';
import {StatusDefined} from '../icons/StatusDefined';
import {StatusInProgress} from '../icons/StatusInProgress';
import {StatusOnHold} from '../icons/StatusOnHold';

const groupSortOrder = [
  StoreType.anywhere,
  StoreType.american,
  StoreType.indian,
  StoreType.online
];
const groupTitles = {
  [StoreType.anywhere]: null,
  [StoreType.american]: 'American',
  [StoreType.indian]: 'Indian',
  [StoreType.online]: 'Online'
};

const groupSort = (group1, group2) => groupSortOrder.indexOf(group1) - groupSortOrder.indexOf(group2);
const groupTitle = group => groupTitles[group];

class $ShoppingList extends Component {
  state = {
    isGrouped: true,
    selectionMode: false
  };

  componentDidMount = () => this.props.connectShoppingItems();

  componentWillUnmount = () => this.props.disconnectShoppingItems();

  cancelSelectionModeButton = () => ({
    icon: Cancel,
    onClick: this.exitSelectionMode
  });

  deleteSelectedShoppingItems = () => {
    this.props.deleteSelectedShoppingItems();
    this.exitSelectionMode();
  };

  enterSelectionMode = index => () => {
    this.setState({selectionMode: true});
    this.props.toggleShoppingItem(index);
  };

  exitSelectionMode = () => {
    this.setState({selectionMode: false});
    this.props.toggleAllShoppingItems(false);
  };

  getControls = () => this.state.selectionMode ? [
    <Action
      icon={SelectAll}
      key='select-all'
      onClick={this.selectAllShoppingItems}
    />,
    <Action
      icon={Delete}
      key='add'
      onClick={this.deleteSelectedShoppingItems}
    />,
    <MoreMenu key='more'>
      <MenuItem
        icon={StatusDefined}
        iconClassName={iconStyles.iconStatusDefined}
        onClick={this.updateSelectedShoppingItemsStore(StoreType.anywhere)}
      >
        Mark as Defined
      </MenuItem>
      <MenuItem
        icon={StatusInProgress}
        iconClassName={iconStyles.iconStatusInProgress}
        onClick={this.updateSelectedShoppingItemsStore(StoreType.american)}
      >
        Mark as In Progress
      </MenuItem>
      <MenuItem
        icon={StatusOnHold}
        iconClassName={iconStyles.iconStatusOnHold}
        onClick={this.updateSelectedShoppingItemsStore(StoreType.indian)}
      >
        Mark as On Hold
      </MenuItem>
      <MenuItem
        icon={StatusCompleted}
        iconClassName={iconStyles.iconStatusCompleted}
        onClick={this.updateSelectedShoppingItemsStore(StoreType.online)}
      >
        Mark as Completed
      </MenuItem>
    </MoreMenu>
  ] : [
    <Action
      icon={Group}
      iconClassName={conditionalClassName(this.state.isGrouped, iconStyles.iconGrouped, iconStyles.iconUnGrouped)}
      key='group'
      onClick={this.toggleGroup}
    />,
    <Action
      as={Link}
      icon={Add}
      key='add'
      to={pages.listShoppingAddItem}
    />
  ];

  getTitleNavButton = () => this.state.selectionMode ? this.cancelSelectionModeButton : backButton();

  selectAllShoppingItems = () => this.props.toggleAllShoppingItems(true);

  selectShoppingItem = index => () => this.props.toggleShoppingItem(index);

  toggleGroup = () => this.setState({isGrouped: !this.state.isGrouped});

  updateSelectedShoppingItemsStore = store => () => {
    this.props.updateSelectedShoppingItemsStore(store);
    this.exitSelectionMode();
  };

  render() {
    return (
      <PageFrame
        className={join(styles.shoppingList, conditionalClassName(this.state.isGrouped, styles.grouped))}
        controls={this.getControls()}
        pageAnimationClassName={animations.slideIn}
        title={this.state.selectionMode ? 'Edit Shopping List' : 'Shopping List'}
        titleNavButtonProps={this.getTitleNavButton()}
      >
        <GroupBy
          by='store'
          list={this.props.shoppingItems}
          shouldGroup={this.state.isGrouped}
          sort={groupSort}
          splitterClassName={styles.listSplitter}
          title={groupTitle}
        >
          {
            ({index, item}) =>
              <ShoppingItem
                index={index}
                isLongClickDisabled={this.state.selectionMode}
                key={item.key}
                onClick={this.selectShoppingItem(index, item)}
                onLongClick={this.enterSelectionMode(index, item)}
                onStatusChange={this.props.updateShoppingItemStatus}
                shoppingItem={item}
              />
          }
        </GroupBy>
      </PageFrame>
    );
  }
}

$ShoppingList.propTypes = {
  connectShoppingItems: PropTypes.func.isRequired,
  deleteSelectedShoppingItems: PropTypes.func.isRequired,
  disconnectShoppingItems: PropTypes.func.isRequired,
  shoppingItems: PropTypes.array.isRequired,
  toggleAllShoppingItems: PropTypes.func.isRequired,
  toggleShoppingItem: PropTypes.func.isRequired,
  updateSelectedShoppingItemsStore: PropTypes.func.isRequired,
  updateShoppingItemStatus: PropTypes.func.isRequired,
  updateShoppingItemStore: PropTypes.func.isRequired
};

export const ShoppingList = connect(
  state => ({shoppingItems: state.shoppingItems}),
  actionCreators
)($ShoppingList);
