import styles from '../styles/ShoppingItems.scss';
import {Status} from './ShoppingItems';

export const statusClasses = {
  [Status.bought]: styles.bought,
  [Status.shop]: styles.shop
};
