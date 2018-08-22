import superagent from 'superagent'
import {logError} from '../lib/utils'

export const albumGet = albums => ({
  type: 'ALBUM_GET',
  payload: albums
})

export const albumCreate = album => ({
  type: 'ALBUM_CREATE',
  payload: album
})

export const albumUpdate = album => ({
  type: 'ALBUM_UPDATE',
  payload: album
})

export const albumDelete = album => ({
  type: 'ALBUM_DELETE',
  payload: album
})

export const albumFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/album`)
  .then(res => dispatch(albumGet(res.body))) // don't need to return res?
  .catch(logError)
}

export const albumCreateRequest = album => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/album`)
  .send(album)
  .then(res => dispatch(albumCreate(res.body)))
  .catch(logError)
}

export const albumUpdateRequest = album => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/album/${album._id}`)
  .send(album)
  .then(res => dispatch(albumUpdate(album)))
  .catch(logError)
}

export const albumDeleteRequest = album => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/album/${album._id}`)
  .then(res => dispatch(albumDelete(album)))
  .catch(logError)
}

