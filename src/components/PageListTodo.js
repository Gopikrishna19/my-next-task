import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../state/routes';
import {Status} from '../state/Todos';
import {updateTodo, updateTodoStatus} from '../store/action-creators/todo';
import animations from '../styles/Animations.scss';
import styles from '../styles/Todos.scss';
import {backButton} from '../utils/buttons';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockGroupBy} from './BlockGroupBy';
import {BlockIconAdd} from './BlockIconAdd';
import {BlockIconGroup} from './BlockIconGroup';
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

  enterSelectionMode = (index, todo) => () => {
    this.setState({selectionMode: true});
    this.props.updateTodo(index, todo.toggle());
  };

  selectItem = (index, todo) => () => {
    this.props.updateTodo(index, todo.toggle());
  };

  toggleGroup = () => this.setState({isGrouped: !this.state.isGrouped});

  render() {
    return (
      <PageFrame
        className={join(styles.todoList, conditionalClassName(this.state.isGrouped, styles.grouped))}
        controls={[
          <BlockButtonAction
            icon={BlockIconGroup}
            iconClassName={conditionalClassName(this.state.isGrouped, styles.iconGrouped, styles.iconUnGrouped)}
            key='group'
            onClick={this.toggleGroup}
          />,
          <BlockButtonAction
            as={Link}
            icon={BlockIconAdd}
            key='add'
            to={pages.listTodoAddItem}
          />
        ]}
        pageAnimationClassName={animations.slideIn}
        title='Todo List'
        titleNavButtonProps={backButton()}
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
                index={this.props.todos.indexOf(item)}
                isLongClickDisabled={this.state.selectionMode}
                key={index}
                onClick={this.selectItem(index, item)}
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
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired
};

export const PageListTodo = connect(
  state => ({todos: state.todos}),
  {
    updateTodo,
    updateTodoStatus
  }
)($PageListTodo);
