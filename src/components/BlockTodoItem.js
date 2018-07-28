import PropTypes from 'prop-types';
import React from 'react';
import {statusClasses} from '../state/todo-status-class-names';
import {statusPills} from '../state/todo-status-pills';
import {Todo} from '../state/Todos';
import styles from '../styles/Todos.scss';
import {join} from '../utils/class-names';
import {BlockCard} from './BlockCard';
import {BlockStatusToggle} from './BlockStatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const BlockTodoItem = props =>
  <BlockCard className={join(styles.todoItemTask, statusClasses[props.todo.status])}>
    {props.todo.task}
    <BlockStatusToggle
      className={join(styles.statusToggle, statusClasses[props.todo.status])}
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
