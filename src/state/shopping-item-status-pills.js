import React from 'react';
import {StatusBought} from '../components/icons/StatusBought';
import {StatusShop} from '../components/icons/StatusShop';
import iconStyles from '../styles/Icons.scss';
import {Status} from './ShoppingItems';

export const statusPills = new Map([
  [Status.shop, <StatusShop className={iconStyles.iconStatusDefined} key='shop'/>],
  [Status.bought, <StatusBought className={iconStyles.iconStatusCompleted} key='bought'/>]
]);
