export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) => 
  test ? component : undefined;

export const classToggler = (config) => 
  Object.keys(config).filter(key => config[key]).join(' ');

export const map = (list, ...args) => 
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) => 
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) => 
  Array.prototype.reduce.apply(list, args);
