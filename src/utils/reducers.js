export const defineReducer = (handlers, getDefaultState) =>
  (state = getDefaultState(), action) => {
    const handler = handlers[action.type];

    return handler ? handler(state, action) : state;
  };
