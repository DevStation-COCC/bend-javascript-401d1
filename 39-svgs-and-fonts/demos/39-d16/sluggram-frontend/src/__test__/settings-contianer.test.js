import React from 'react'
import {mount} from 'enzyme'
import superagent from 'superagent'
import mocker from 'superagent-mocker'
import appStoreCreate from '../lib/app-store-create.js'
import SettingsContainer from '../component/settings-container'

let mockAPI = mocker(superagent)

describe('testing SettingsContainer', () => {
  afterEach(() => mockAPI.clearRoutes())

  test('cool', () => {
    mockAPI.get('http://cool.com/cool', () => ({
      status: 200,
      body: {greet: 'hello world'}
    }))

    return superagent.get('http://cool.com/cool')
    .then((res) => {
      expect(res.status).toEqual(200)
      expect(res.body).toEqual({greet: 'hello world'})
    })
  })

  test('snarf', () => {
    mockAPI.post('http://localhost:7777/profiles', (req) => {
    })

    let mockStore = appStoreCreate()
    


  })

})
