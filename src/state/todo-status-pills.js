import React from 'react';
import {BlockStatusPill} from '../components/BlockStatusPill';
import styles from '../styles/Icons.scss';
import {join} from '../utils/class-names';
import {Status} from './Todos';

export const statusPills = new Map([
  [Status.defined, <BlockStatusPill key='defined' className={join(styles.iconDefined)}/>],
  [Status.inProgress, <BlockStatusPill key='inProgress' className={join(styles.iconInProgress)}/>],
  [Status.onHold, <BlockStatusPill key='onHold' className={join(styles.iconOnHold)}/>],
  [Status.completed, <BlockStatusPill key='completed' className={join(styles.iconCompleted)}/>]
]);
