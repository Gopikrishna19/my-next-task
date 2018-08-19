import {getUser} from './user';

export const getTodos = () => {
  const todos = getUser().child('todos');

  return todos.once('value')
    .then(snapshot => snapshot.val())
    .catch(() => []);
};
