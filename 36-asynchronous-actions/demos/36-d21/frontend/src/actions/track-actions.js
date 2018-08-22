import superagent from 'superagent'
import { logError } from '../lib/utils'

export const trackGet = tracks => ({
  type: 'TRACK_GET',
  payload: tracks
})

export const trackCreate = track => ({
  type: 'TRACK_CREATE',
  payload: track
})

export const trackUpdate = track => ({
  type: 'TRACK_UPDATE',
  payload: track
})

export const trackDelete = track => ({
  type: 'TRACK_DELETE',
  payload: track
})

export const trackFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/track`)
    .then(res => dispatch(trackGet(res.body))) // don't need to return res?
    .catch(logError)
}

export const trackCreateRequest = track => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/track`)
    .send(track)
    .then(res => dispatch(trackCreate(res.body)))
    .catch(logError)
}

export const trackUpdateRequest = track => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/track/${track._id}`)
    .send(track)
    .then(res => dispatch(trackUpdate(res.body)))
    .catch(logError)
}

export const trackDeleteRequest = track => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/track/${track._id}`)
    .then(res => dispatch(trackDelete(res.body)))
    .catch(logError)
}

