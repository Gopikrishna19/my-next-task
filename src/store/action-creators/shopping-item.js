import {injectShoppingItems} from '../../middleware/shopping-items';
import {createShoppingItem, deleteShoppingItems, offShoppingItemsChange, onShoppingItemsChange, updateShoppingItems} from '../../repository/shopping-items';
import {ShoppingItems} from '../../state/ShoppingItems';
import {actions} from '../actions';
import {showToast} from './toast';

export const addShoppingItem = shoppingItem =>
  async dispatch => {
    await createShoppingItem(shoppingItem);

    dispatch(showToast('Added a to do item'));
  };

export const deleteSelectedShoppingItems = () =>
  injectShoppingItems(shoppingItems => deleteShoppingItems(shoppingItems.filter(shoppingItem => shoppingItem.isSelected)));

export const connectShoppingItems = () =>
  dispatch => onShoppingItemsChange(
    shoppingItems => dispatch({
      shoppingItems,
      type: actions.SHOPPING_ITEMS_SET
    })
  );

export const disconnectShoppingItems = () =>
  () => offShoppingItemsChange();

export const toggleAllShoppingItems = selection => ({
  selection,
  type: actions.SHOPPING_ITEMS_UPDATE_SELECTION_OF_ALL
});

export const toggleShoppingItem = index => ({
  index,
  type: actions.SHOPPING_ITEMS_UPDATE_SELECTION
});

export const updateSelectedShoppingItemsStoreType = storeType =>
  injectShoppingItems(shoppingItems => {
    const updatedShoppingItems = ShoppingItems.updateSelectedShoppingItemsStoreType(shoppingItems, storeType);
    const newShoppingItems = ShoppingItems.updateAllShoppingItemsSelection(updatedShoppingItems, false);

    updateShoppingItems(newShoppingItems);
  });

export const updateShoppingItemStoreType = (index, storeType) =>
  injectShoppingItems(shoppingItems => updateShoppingItems(ShoppingItems.updateShoppingItemStoreType(shoppingItems, index, storeType)));

export const updateSelectedShoppingItemsStatus = status =>
  injectShoppingItems(shoppingItems => {
    const updatedShoppingItems = ShoppingItems.updateSelectedShoppingItemsStatus(shoppingItems, status);
    const newShoppingItems = ShoppingItems.updateAllShoppingItemsSelection(updatedShoppingItems, false);

    updateShoppingItems(newShoppingItems);
  });

export const updateShoppingItemStatus = (index, status) =>
  injectShoppingItems(shoppingItems => updateShoppingItems(ShoppingItems.updateShoppingItemStatus(shoppingItems, index, status)));
