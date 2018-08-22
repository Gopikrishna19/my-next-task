const INJECT_TODOS = Symbol('INJECT_TODOS');

export const injectTodos = perform => ({
  perform,
  type: INJECT_TODOS
});

export const todosMiddleware = store => next => action => {
  if (action.type === INJECT_TODOS) {
    action.perform(store.getState().todos, store.dispatch, store.getState);
  } else {
    next(action);
  }
};
