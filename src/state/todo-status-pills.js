import React from 'react';
import {StatusCompleted} from '../components/icons/StatusCompleted';
import {StatusDefined} from '../components/icons/StatusDefined';
import {StatusInProgress} from '../components/icons/StatusInProgress';
import {StatusOnHold} from '../components/icons/StatusOnHold';
import iconStyles from '../styles/Icons.scss';
import {Status} from './Todos';

export const statusPills = new Map([
  [Status.defined, <StatusDefined className={iconStyles.iconStatusDefined} key='defined'/>],
  [Status.inProgress, <StatusInProgress className={iconStyles.iconStatusInProgress} key='inProgress'/>],
  [Status.onHold, <StatusOnHold className={iconStyles.iconStatusOnHold} key='onHold'/>],
  [Status.completed, <StatusCompleted className={iconStyles.iconStatusCompleted} key='completed'/>]
]);
