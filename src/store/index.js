import {createStore} from 'redux';
import reducers from './reducers';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(reducers);
  }

  return store;
};
