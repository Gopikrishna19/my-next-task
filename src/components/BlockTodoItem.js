import PropTypes from 'prop-types';
import React from 'react';
import {statusPills} from '../state/todo-status-pills';
import {Todo} from '../state/Todos';
import styles from '../styles/Todos.scss';
import {BlockCard} from './BlockCard';
import {BlockStatusToggle} from './BlockStatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const BlockTodoItem = props =>
  <BlockCard className={styles.todoItemTask}>
    <div>
      {props.todo.task}
    </div>
    <BlockStatusToggle
      className={styles.statusToggle}
      onChange={handleStatusChange(props)}
      status={props.todo.status}
      statuses={statusPills}
    />
  </BlockCard>;

BlockTodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Todo).isRequired
};
