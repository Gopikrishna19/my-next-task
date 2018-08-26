import PropTypes from 'prop-types';
import React from 'react';
import {statusClasses} from '../../state/shopping-item-status-class-names';
import {statusPills} from '../../state/shopping-item-status-pills';
import {ShoppingItem as ShoppingItemType} from '../../state/ShoppingItems';
import iconStyles from '../../styles/Icons.scss';
import styles from '../../styles/ShoppingItems.scss';
import {conditionalClassName, join} from '../../utils/class-names';
import {Selected} from '../icons/Selected';
import {Shell} from '../icons/Shell';
import {Card} from './Card';
import {LongPress} from './LongPress';
import {StatusToggle} from './StatusToggle';

const handleStatusChange = props => status => props.onStatusChange(props.index, status);

export const ShoppingItem = props =>
  <LongPress
    isDisabled={props.isLongClickDisabled}
    onClick={props.onClick}
    onLongClick={props.onLongClick}
  >
    <Card
      className={join(
        styles.shoppingItem,
        conditionalClassName(props.shoppingItem.isSelected, styles.selected),
        statusClasses[props.shoppingItem.status]
      )}
    >
      {
        props.isLongClickDisabled ?
          <div className={styles.statusToggle}>
            {props.shoppingItem.isSelected ? <Selected className={iconStyles.iconCardInverted}/> : <Shell/>}
          </div> :
          <StatusToggle
            className={join(styles.statusToggle)}
            onChange={handleStatusChange(props)}
            status={props.shoppingItem.status}
            statuses={statusPills}
          />
      }
      {props.shoppingItem.name}
    </Card>
  </LongPress>;

ShoppingItem.propTypes = {
  index: PropTypes.number.isRequired,
  isLongClickDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onLongClick: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  shoppingItem: PropTypes.instanceOf(ShoppingItemType).isRequired
};
