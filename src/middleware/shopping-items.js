const INJECT_SHOPPING_ITEMS = Symbol('INJECT_SHOPPING_ITEMS');

export const injectShoppingItems = perform => ({
  perform,
  type: INJECT_SHOPPING_ITEMS
});

export const shoppingItemsMiddleware = store => next => action => {
  if (action.type === INJECT_SHOPPING_ITEMS) {
    action.perform(store.getState().shoppingItems, store.dispatch, store.getState);
  } else {
    next(action);
  }
};
