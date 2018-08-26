import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../../state/routes';
import {Status} from '../../state/Todos';
import * as actionCreators from '../../store/action-creators/todo';
import animations from '../../styles/Animations.scss';
import iconStyles from '../../styles/Icons.scss';
import styles from '../../styles/Todos.scss';
import {backButton} from '../../utils/buttons';
import {conditionalClassName, join} from '../../utils/class-names';
import {GroupBy} from '../blocks/GroupBy';
import {MoreMenu} from '../blocks/MoreMenu';
import {PageFrame} from '../blocks/PageFrame';
import {TodoItem} from '../blocks/TodoItem';
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

class $TodoList extends Component {
  state = {
    isGrouped: true,
    selectionMode: false
  };

  componentDidMount = () => this.props.connectTodos();

  componentWillUnmount = () => this.props.disconnectTodos();

  cancelSelectionModeButton = () => ({
    icon: Cancel,
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
    <Action
      icon={SelectAll}
      key='select-all'
      onClick={this.selectAllTodos}
    />,
    <Action
      icon={Delete}
      key='add'
      onClick={this.deleteSelectedTodos}
    />,
    <MoreMenu key='more'>
      <MenuItem
        icon={StatusDefined}
        iconClassName={iconStyles.iconStatusDefined}
        onClick={this.updateSelectedTodosStatus(Status.defined)}
      >
        Mark as Defined
      </MenuItem>
      <MenuItem
        icon={StatusInProgress}
        iconClassName={iconStyles.iconStatusInProgress}
        onClick={this.updateSelectedTodosStatus(Status.inProgress)}
      >
        Mark as In Progress
      </MenuItem>
      <MenuItem
        icon={StatusOnHold}
        iconClassName={iconStyles.iconStatusOnHold}
        onClick={this.updateSelectedTodosStatus(Status.onHold)}
      >
        Mark as On Hold
      </MenuItem>
      <MenuItem
        icon={StatusCompleted}
        iconClassName={iconStyles.iconStatusCompleted}
        onClick={this.updateSelectedTodosStatus(Status.completed)}
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
        <GroupBy
          by='status'
          list={this.props.todos}
          shouldGroup={this.state.isGrouped}
          sort={groupSort}
          splitterClassName={styles.listSplitter}
          title={groupTitle}
        >
          {
            ({index, item}) =>
              <TodoItem
                index={index}
                isLongClickDisabled={this.state.selectionMode}
                key={item.key}
                onClick={this.selectTodo(index, item)}
                onLongClick={this.enterSelectionMode(index, item)}
                onStatusChange={this.props.updateTodoStatus}
                todo={item}
              />
          }
        </GroupBy>
      </PageFrame>
    );
  }
}

$TodoList.propTypes = {
  connectTodos: PropTypes.func.isRequired,
  deleteSelectedTodos: PropTypes.func.isRequired,
  disconnectTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  toggleAllTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateSelectedTodosStatus: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired
};

export const TodoList = connect(
  state => ({todos: state.todos}),
  actionCreators
)($TodoList);
