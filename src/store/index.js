import {compose, createStore} from 'redux';
import reducers from './reducers';

const developmentCompose = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
let composeEnhancers = compose,
  store;

if (build.mode === 'development') {
  composeEnhancers = window[developmentCompose] || compose;
}

export const getStore = () => {
  if (!store) {
    store = createStore(reducers, composeEnhancers());
  }

  return store;
};
