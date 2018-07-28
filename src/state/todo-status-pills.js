import React from 'react';
import {BlockIconStatusCompleted} from '../components/BlockIconStatusCompleted';
import {BlockIconStatusDefined} from '../components/BlockIconStatusDefined';
import {BlockIconStatusInProgress} from '../components/BlockIconStatusInProgress';
import {BlockIconStatusOnHold} from '../components/BlockIconStatusOnHold';
import iconStyles from '../styles/Icons.scss';
import {Status} from './Todos';

export const statusPills = new Map([
  [Status.defined, <BlockIconStatusDefined key='defined' className={iconStyles.iconStatusDefined}/>],
  [Status.inProgress, <BlockIconStatusInProgress key='inProgress' className={iconStyles.iconStatusInProgress}/>],
  [Status.onHold, <BlockIconStatusOnHold key='onHold' className={iconStyles.iconStatusOnHold}/>],
  [Status.completed, <BlockIconStatusCompleted key='completed' className={iconStyles.iconStatusCompleted}/>]
]);
