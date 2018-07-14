export const join = (...classNames) =>
  classNames
    .filter(className => className)
    .join(' ');

export const conditionalClassName = (condition, successClass = '', failClass = '') =>
  condition ? successClass : failClass;
