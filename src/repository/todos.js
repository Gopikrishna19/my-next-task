import {database} from '../firebase';

export const getTodos = () => {
  const todos = database().ref('api/todos');

  return todos.once('value')
    .then(snapshot => snapshot.val())
    .catch(() => []);
};
