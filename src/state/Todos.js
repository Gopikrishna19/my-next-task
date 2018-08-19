import * as t from 'tcomb';

export const Status = t.Object({
  completed: 'completed',
  defined: 'defined',
  inProgress: 'in-progress',
  onHold: 'on-hold'
});

export const Todo = t.struct({
  isSelected: t.Boolean,
  key: t.maybe(t.String),
  status: t.enums.of(Object.values(Status)),
  task: t.String
}, 'Todo');

export const Todos = t.list(Todo, 'Todos');

export const defaultTodo = new Todo({
  isSelected: false,
  status: 'defined',
  task: ''
});

export const defaultTodos = new Todos([]);

Todo.prototype.unlock = function () {
  return JSON.parse(JSON.stringify(this));
};
Todo.prototype.toggleSelection = function (selection = !this.isSelected) {
  return Todo.update(this, {isSelected: {$set: selection}});
};
Todo.prototype.setKey = function (key) {
  return Todo.update(this, {key: {$set: key}});
};

Todos.addTodo = (todos, todo) => Todos.update(todos, {$unshift: [todo]});
Todos.updateAllTodosSelection = (todos, selection) => new Todos(todos.map(todo => todo.toggleSelection(selection)));
Todos.updateTodoSelection = (todos, index, selection) => Todos.update(todos, {$merge: {[index]: todos[index].toggleSelection(selection)}});
Todos.updateTodoStatus = (todos, index, status) => Todos.update(todos, {[index]: {$merge: {status}}});
Todos.updateSelectedTodosStatus = (todos, status) => Todos.update(
  todos,
  todos.reduce((query, todo, index) => todo.isSelected ? ({
    ...query,
    [index]: {$merge: {status}}
  }) : query, {})
);
