import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../state/routes';
import {statusClasses} from '../state/todo-status-class-names';
import {Status} from '../state/Todos';
import {updateTodoStatus} from '../store/action-creators/todo';
import animations from '../styles/Animations.scss';
import styles from '../styles/Todos.scss';
import {backButton} from '../utils/buttons';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockIconAdd} from './BlockIconAdd';
import {BlockIconGroup} from './BlockIconGroup';
import {BlockListSplitter} from './BlockListSplitter';
import {BlockTodoItem} from './BlockTodoItem';
import {PageFrame} from './PageFrame';

class $PageListTodo extends Component {
  constructor() {
    super();

    this.state = {isGrouped: true};
  }

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
        <BlockListSplitter
          className={join(styles.listSplitter, statusClasses[Status.onHold])}
          title='On Hold'
        />
        <BlockListSplitter
          className={join(styles.listSplitter, statusClasses[Status.inProgress])}
          title='In Progress'
        />
        <BlockListSplitter
          className={join(styles.listSplitter, statusClasses[Status.completed])}
          title='Completed'
        />
        {
          this.props.todos.map((todo, index) =>
            <BlockTodoItem
              index={index}
              key={index}
              onStatusChange={this.props.updateTodoStatus}
              todo={todo}
            />
          )
        }
      </PageFrame>
    );
  }
}

$PageListTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodoStatus: PropTypes.func.isRequired
};

export const PageListTodo = connect(
  state => ({todos: state.todos}),
  {updateTodoStatus}
)($PageListTodo);
