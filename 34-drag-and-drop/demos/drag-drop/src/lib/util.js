export const renderIf = (test, component) =>
  test ? component : undefined

export const classToggler = (config) => 
  Object.keys(config).filter(key => config[key]).join(' ')

export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined
