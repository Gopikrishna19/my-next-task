import {getUser} from './user';

const getShoppingItems = () => getUser().child('shoppingItems');

export const createShoppingItem = shoppingItem =>
  getShoppingItems().push()
    .then(async record => {
      const {key} = record;
      const newShoppingItem = shoppingItem.setKey(key);

      await record.set(newShoppingItem);

      return newShoppingItem;
    });

export const deleteShoppingItems = shoppingItems =>
  getShoppingItems().update(
    shoppingItems.reduce((patch, shoppingItem) => Object.assign(
      patch,
      {[shoppingItem.key]: null}
    ), {})
  );

export const offShoppingItemsChange = () =>
  getShoppingItems().off('value');

export const onShoppingItemsChange = callback =>
  getShoppingItems().on('value', snapshot => {
    const shoppingItems = snapshot.val() || {};

    callback(Object.values(shoppingItems));
  });

export const updateShoppingItems = shoppingItems =>
  getShoppingItems().update(
    shoppingItems.reduce((patch, shoppingItem) => Object.assign(
      patch,
      {[shoppingItem.key]: shoppingItem}
    ), {})
  );
