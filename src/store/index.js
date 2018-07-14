import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const developmentCompose = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
let composeEnhancers = compose,
  store;

if (build.mode === 'development') {
  composeEnhancers = window[developmentCompose] || compose;
}

export const getStore = () => {
  if (!store) {
    store = createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(thunk)
      )
    );
  }

  return store;
};
