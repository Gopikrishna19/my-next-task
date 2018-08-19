import {getUser} from './user';

const getTodos = () => getUser().child('todos');

export const createTodo = todo =>
  getTodos().push()
    .then(async record => {
      const {key} = record;
      const newTodo = todo.setKey(key);

      await record.set(newTodo);

      return newTodo;
    });

export const deleteTodos = (...todos) =>
  getTodos().update(
    todos.reduce((patch, todo) => Object.assign(
      patch,
      {[todo.key]: null}
    ), {})
  );

export const readTodos = () =>
  getTodos().once('value')
    .then(snapshot => snapshot.val() || {})
    .then(todos => Object.values(todos))
    .catch(() => []);

export const updateTodos = todos =>
  getTodos().update(
    todos.reduce((patch, todo) => Object.assign(
      patch,
      {[todo.key]: todo}
    ), {})
  );
