import * as t from 'tcomb';

export const Status = t.Object({
  bought: 'bought',
  shop: 'shop'
});

export const StoreType = t.Object({
  american: 'american',
  anywhere: 'anywhere',
  indian: 'indian',
  online: 'online'
});

export const ShoppingItem = t.struct({
  isSelected: t.Boolean,
  key: t.maybe(t.String),
  name: t.String,
  status: t.enums.of(Object.values(Status)),
  storeType: t.enums.of(Object.values(StoreType))
}, 'ShoppingItem');

export const ShoppingItems = t.list(ShoppingItem, 'ShoppingItems');

export const defaultShoppingItem = new ShoppingItem({
  isSelected: false,
  name: '',
  status: Status.shop,
  storeType: StoreType.anywhere
});

export const defaultShoppingItems = new ShoppingItems([]);

ShoppingItem.prototype.unlock = function () {
  return JSON.parse(JSON.stringify(this));
};
ShoppingItem.prototype.toggleSelection = function (selection = !this.isSelected) {
  return ShoppingItem.update(this, {isSelected: {$set: selection}});
};
ShoppingItem.prototype.setKey = function (key) {
  return ShoppingItem.update(this, {key: {$set: key}});
};

ShoppingItems.addShoppingItem = (items, item) => ShoppingItems.update(items, {$unshift: [item]});
ShoppingItems.updateAllShoppingItemsSelection = (items, selection) => new ShoppingItems(items.map(item => item.toggleSelection(selection)));
ShoppingItems.updateShoppingItemSelection = (items, index, selection) => ShoppingItems.update(items, {$merge: {[index]: items[index].toggleSelection(selection)}});
ShoppingItems.updateShoppingItemStatus = (items, index, status) => ShoppingItems.update(items, {[index]: {$merge: {status}}});
ShoppingItems.updateSelectedShoppingItemsStatus = (items, status) => ShoppingItems.update(
  items,
  items.reduce((query, item, index) => item.isSelected ? ({
    ...query,
    [index]: {$merge: {status}}
  }) : query, {})
);
ShoppingItems.updateShoppingItemStore = (items, index, store) => ShoppingItems.update(items, {[index]: {$merge: {store}}});
ShoppingItems.updateSelectedShoppingItemsStore = (items, store) => ShoppingItems.update(
  items,
  items.reduce((query, item, index) => item.isSelected ? ({
    ...query,
    [index]: {$merge: {store}}
  }) : query, {})
);
