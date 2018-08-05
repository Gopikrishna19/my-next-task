import React from 'react';
import {BlockIconStatusCompleted} from '../components/BlockIconStatusCompleted';
import {BlockIconStatusDefined} from '../components/BlockIconStatusDefined';
import {BlockIconStatusInProgress} from '../components/BlockIconStatusInProgress';
import {BlockIconStatusOnHold} from '../components/BlockIconStatusOnHold';
import iconStyles from '../styles/Icons.scss';
import {Status} from './Todos';

export const statusPills = new Map([
  [Status.defined, <BlockIconStatusDefined className={iconStyles.iconStatusDefined} key='defined'/>],
  [Status.inProgress, <BlockIconStatusInProgress className={iconStyles.iconStatusInProgress} key='inProgress'/>],
  [Status.onHold, <BlockIconStatusOnHold className={iconStyles.iconStatusOnHold} key='onHold'/>],
  [Status.completed, <BlockIconStatusCompleted className={iconStyles.iconStatusCompleted} key='completed'/>]
]);
