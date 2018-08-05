import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../state/routes';
import {Status} from '../state/Todos';
import * as actionCreators from '../store/action-creators/todo';
import animations from '../styles/Animations.scss';
import iconStyles from '../styles/Icons.scss';
import styles from '../styles/Todos.scss';
import {backButton} from '../utils/buttons';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockButtonMenuItem} from './BlockButtonMenuItem';
import {BlockGroupBy} from './BlockGroupBy';
import {BlockIconAdd} from './BlockIconAdd';
import {BlockIconCancel} from './BlockIconCancel';
import {BlockIconDelete} from './BlockIconDelete';
import {BlockIconGroup} from './BlockIconGroup';
import {BlockIconSelectAll} from './BlockIconSelectAll';
import {BlockIconStatusCompleted} from './BlockIconStatusCompleted';
import {BlockIconStatusDefined} from './BlockIconStatusDefined';
import {BlockIconStatusInProgress} from './BlockIconStatusInProgress';
import {BlockIconStatusOnHold} from './BlockIconStatusOnHold';
import {BlockMoreMenu} from './BlockMoreMenu';
import {BlockTodoItem} from './BlockTodoItem';
import {PageFrame} from './PageFrame';

const groupSortOrder = [
  Status.defined,
  Status.inProgress,
  Status.onHold,
  Status.completed
];
const groupTitles = {
  [Status.defined]: null,
  [Status.onHold]: 'On Hold',
  [Status.inProgress]: 'In Progress',
  [Status.completed]: 'Completed'
};

const groupSort = (group1, group2) => groupSortOrder.indexOf(group1) - groupSortOrder.indexOf(group2);
const groupTitle = group => groupTitles[group];

class $PageListTodo extends Component {
  state = {
    isGrouped: true,
    selectionMode: false
  };

  cancelSelectionModeButton = () => ({
    icon: BlockIconCancel,
    onClick: this.exitSelectionMode
  });

  deleteSelectedTodos = () => {
    this.props.deleteSelectedTodos();
    this.exitSelectionMode();
  };

  enterSelectionMode = index => () => {
    this.setState({selectionMode: true});
    this.props.toggleTodo(index);
  };

  exitSelectionMode = () => {
    this.setState({selectionMode: false});
    this.props.toggleAllTodos(false);
  };

  getControls = () => this.state.selectionMode ? [
    <BlockButtonAction
      icon={BlockIconSelectAll}
      key='select-all'
      onClick={this.selectAllTodos}
    />,
    <BlockButtonAction
      icon={BlockIconDelete}
      key='add'
      onClick={this.deleteSelectedTodos}
    />,
    <BlockMoreMenu key='more'>
      <BlockButtonMenuItem
        icon={BlockIconStatusDefined}
        iconClassName={iconStyles.iconStatusDefined}
        onClick={this.updateSelectedTodosStatus(Status.defined)}
      >
        Mark as Defined
      </BlockButtonMenuItem>
      <BlockButtonMenuItem
        icon={BlockIconStatusInProgress}
        iconClassName={iconStyles.iconStatusInProgress}
        onClick={this.updateSelectedTodosStatus(Status.inProgress)}
      >
        Mark as In Progress
      </BlockButtonMenuItem>
      <BlockButtonMenuItem
        icon={BlockIconStatusOnHold}
        iconClassName={iconStyles.iconStatusOnHold}
        onClick={this.updateSelectedTodosStatus(Status.onHold)}
      >
        Mark as On Hold
      </BlockButtonMenuItem>
      <BlockButtonMenuItem
        icon={BlockIconStatusCompleted}
        iconClassName={iconStyles.iconStatusCompleted}
        onClick={this.updateSelectedTodosStatus(Status.completed)}
      >
        Mark as Completed
      </BlockButtonMenuItem>
    </BlockMoreMenu>
  ] : [
    <BlockButtonAction
      icon={BlockIconGroup}
      iconClassName={conditionalClassName(this.state.isGrouped, iconStyles.iconGrouped, iconStyles.iconUnGrouped)}
      key='group'
      onClick={this.toggleGroup}
    />,
    <BlockButtonAction
      as={Link}
      icon={BlockIconAdd}
      key='add'
      to={pages.listTodoAddItem}
    />
  ];

  getTitleNavButton = () => this.state.selectionMode ? this.cancelSelectionModeButton : backButton();

  selectAllTodos = () => this.props.toggleAllTodos(true);

  selectTodo = index => () => this.props.toggleTodo(index);

  toggleGroup = () => this.setState({isGrouped: !this.state.isGrouped});

  updateSelectedTodosStatus = status => () => {
    this.props.updateSelectedTodosStatus(status);
    this.exitSelectionMode();
  };

  render() {
    return (
      <PageFrame
        className={join(styles.todoList, conditionalClassName(this.state.isGrouped, styles.grouped))}
        controls={this.getControls()}
        pageAnimationClassName={animations.slideIn}
        title={this.state.selectionMode ? 'Edit Todo List' : 'Todo List'}
        titleNavButtonProps={this.getTitleNavButton()}
      >
        <BlockGroupBy
          by='status'
          list={this.props.todos}
          shouldGroup={this.state.isGrouped}
          sort={groupSort}
          splitterClassName={styles.listSplitter}
          title={groupTitle}
        >
          {
            ({index, item}) =>
              <BlockTodoItem
                index={index}
                isLongClickDisabled={this.state.selectionMode}
                key={index}
                onClick={this.selectTodo(index, item)}
                onLongClick={this.enterSelectionMode(index, item)}
                onStatusChange={this.props.updateTodoStatus}
                todo={item}
              />
          }
        </BlockGroupBy>
      </PageFrame>
    );
  }
}

$PageListTodo.propTypes = {
  deleteSelectedTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  toggleAllTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateSelectedTodosStatus: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired
};

export const PageListTodo = connect(
  state => ({todos: state.todos}),
  actionCreators
)($PageListTodo);
