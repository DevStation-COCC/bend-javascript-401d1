import React from 'react'
import {mount} from 'enzyme'
import CategoryForm from './index.js'

describe('testing CategoryForm', () => {
  test('onComplete should be invoked with the state onSubmit', () => {
    // create a mock function that keeps track of calls 
    let mockHandleOnComplete = jest.fn() 
    
    // mount the component
    let wrapper = mount(
      <CategoryForm onComplete={mockHandleOnComplete} buttonText='submit' />
    )

    // create a mock state 
    let mockState = {title: 'cool beans'}
    wrapper.setState(mockState)

    // submit the form
    wrapper.find('form').simulate('submit')
    
    // test that the state wass passed to onComplete 
    let {calls} = mockHandleOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)
  })
  
  test('testing onchange should update the title on the state', () => {
    let wrapper = mount(
      <CategoryForm onComplete={() => {}} buttonText='submit' />
    )

    wrapper.find('input').simulate('change', {
      target: { name: 'title', value: 'cool' , type: 'text'},
    })

    expect(wrapper.state('title')).toEqual('cool')
  })
})

