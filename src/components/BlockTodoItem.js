import PropTypes from 'prop-types';
import React from 'react';
import {statusPills} from '../state/todo-status-pills';
import {Todo} from '../state/Todos';
import styles from '../styles/Todos.scss';
import {BlockCard} from './BlockCard';
import {BlockSplitter} from './BlockSplitter';
import {BlockStatusToggle} from './BlockStatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const BlockTodoItem = props =>
  <BlockCard>
    <div className={styles.todoItemTask}>
      {props.todo.task}
    </div>
    <BlockSplitter/>
    <div className={styles.todoItemControls}>
      <BlockStatusToggle
        onChange={handleStatusChange(props)}
        status={props.todo.status}
        statuses={statusPills}
      />
    </div>
  </BlockCard>;

BlockTodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Todo).isRequired
};
