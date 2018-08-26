import {defaultShoppingItems, ShoppingItems} from '../../state/ShoppingItems';
import {defineReducer} from '../../utils/reducers';
import {actions} from '../actions';

const handlers = {
  [actions.SHOPPING_ITEMS_SET]: (state, action) => new ShoppingItems(action.shoppingItems),
  [actions.SHOPPING_ITEMS_UPDATE_SELECTION]: (state, action) => ShoppingItems.updateShoppingItemSelection(state, action.index),
  [actions.SHOPPING_ITEMS_UPDATE_SELECTION_OF_ALL]: (state, action) => ShoppingItems.updateAllShoppingItemsSelection(state, action.selection)
};

export default defineReducer(handlers, () => defaultShoppingItems);
