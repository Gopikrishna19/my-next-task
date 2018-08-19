import {database} from '../firebase';
import {getStore} from '../store';

export const getUser = () => {
  const store = getStore();
  const {user} = store.getState();

  return database().ref(user);
};
