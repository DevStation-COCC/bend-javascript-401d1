export const renderIf = (test, component) => test ? component : undefined
export const classToggler = options => {
  return Object.keys(options).filter(key => !!options[key]).join(' ')
}