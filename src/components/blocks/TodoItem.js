import PropTypes from 'prop-types';
import React from 'react';
import {statusClasses} from '../../state/todo-status-class-names';
import {statusPills} from '../../state/todo-status-pills';
import {Todo} from '../../state/Todos';
import iconStyles from '../../styles/Icons.scss';
import styles from '../../styles/Todos.scss';
import {conditionalClassName, join} from '../../utils/class-names';
import {Selected} from '../icons/Selected';
import {Shell} from '../icons/Shell';
import {Card} from './Card';
import {LongPress} from './LongPress';
import {StatusToggle} from './StatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const TodoItem = props =>
  <LongPress
    isDisabled={props.isLongClickDisabled}
    onClick={props.onClick}
    onLongClick={props.onLongClick}
  >
    <Card
      className={join(
        styles.todoItemTask,
        conditionalClassName(props.todo.isSelected, styles.selected),
        statusClasses[props.todo.status]
      )}
    >
      {props.todo.task}
      {
        props.isLongClickDisabled ?
          <div className={styles.statusToggle}>
            {props.todo.isSelected ? <Selected className={iconStyles.iconCard}/> : <Shell/>}
          </div> :
          <StatusToggle
            className={join(styles.statusToggle, statusClasses[props.todo.status])}
            onChange={handleStatusChange(props)}
            status={props.todo.status}
            statuses={statusPills}
          />
      }
    </Card>
  </LongPress>;

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  isLongClickDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onLongClick: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Todo).isRequired
};
