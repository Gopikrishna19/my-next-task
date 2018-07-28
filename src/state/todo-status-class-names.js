import styles from '../styles/Todos.scss';
import {Status} from './Todos';

export const statusClasses = {
  [Status.defined]: styles.defined,
  [Status.inProgress]: styles.inProgress,
  [Status.onHold]: styles.onHold,
  [Status.completed]: styles.completed
};
