// This can act as our redirect now
export const switchRoute = (path) => ({
  type: 'SWITCH_ROUTE',
  payload: path,
})
