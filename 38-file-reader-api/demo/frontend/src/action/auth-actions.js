import superagent from 'superagent'
import * as utils from '../lib/utils'

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
})

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then(res => {
    dispatch(tokenSet(res.text))
    try {
      localStorage.token = res.text
    } catch(e) {
      console.error(e)
    }
    return res
  })
}

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
  .withCredentials()
  .auth(user.username, user.password)
  .then(res => {
    dispatch(tokenSet(res.text))
    return res
  })
}

export const tokenDeleteRequest = () => dispatch => {
  return new Promise((resolve, reject) => {
    utils.clearLocalStorageToken()
    utils.cookieDelete('X-Sluggram-Token')
    resolve(dispatch(tokenDelete()))
  })
}