import t from 'tcomb';

export const Status = {
  completed: 'completed',
  defined: 'defined',
  inProgress: 'in-progress',
  onHold: 'on-hold'
};

export const Todo = t.struct({
  status: t.enums.of(Object.values(Status)),
  task: t.String
}, 'Todo');

export const Todos = t.list(Todo, 'Todos');

export const defaultTodo = new Todo({
  status: 'defined',
  task: ''
});

export const defaultTodos = new Todos([]);

Todo.prototype.unlock = function () {
  return JSON.parse(JSON.stringify(this));
};

Todos.addTodo = (todos, todo) => Todos.update(todos, {$unshift: [todo]});
Todos.updateTodo = (todos, index, todo) => Todos.update(todos, {$merge: {[index]: todo}});
Todos.updateTodoStatus = (todos, index, status) => Todos.update(todos, {[index]: {$merge: {status}}});
