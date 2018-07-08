export const conditionalRequire = (type, condition) =>
  (props, ...args) =>
    (condition(props) ? type.isRequired : type)(props, ...args);
