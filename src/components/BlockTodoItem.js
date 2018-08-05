import PropTypes from 'prop-types';
import React from 'react';
import {statusClasses} from '../state/todo-status-class-names';
import {statusPills} from '../state/todo-status-pills';
import {Todo} from '../state/Todos';
import styles from '../styles/Todos.scss';
import {conditionalClassName, join} from '../utils/class-names';
import {BlockCard} from './BlockCard';
import {BlockLongPress} from './BlockLongPress';
import {BlockStatusToggle} from './BlockStatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const BlockTodoItem = props =>
  <BlockLongPress
    isDisabled={props.isLongClickDisabled}
    onClick={props.onClick}
    onLongClick={props.onLongClick}
  >
    <BlockCard
      className={join(
        styles.todoItemTask,
        conditionalClassName(props.todo.isSelected, styles.selected),
        statusClasses[props.todo.status]
      )}
    >
      {props.todo.task}
      {props.todo.isSelected ?
        null :
        <BlockStatusToggle
          className={join(styles.statusToggle, statusClasses[props.todo.status])}
          onChange={handleStatusChange(props)}
          status={props.todo.status}
          statuses={statusPills}
        />
      }
    </BlockCard>
  </BlockLongPress>;

BlockTodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  isLongClickDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onLongClick: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Todo).isRequired
};
