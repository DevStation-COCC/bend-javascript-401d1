import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('inital state should be an empty array', () =>{
    let result = categoryReducer(undefined, {type: null})
    expect(result).toEqual([])
  })

  test('if the acytion type isnt registerd it will return the state', () =>{
    let mockState = [
      { id: 'abc',  title: 'cool'},
      { id: '123',  title: 'cool'},
    ]

    let result = categoryReducer(mockState, {type: null})
    expect(result).toEqual(mockState)
  })

  test('CATEGORY_CREATE should append to the array', () => {
    let actionOne = { 
      type: 'CATEGORY_CREATE', 
      payload: {
        id:'123',
        title: 'cool beans',
        timestamp: new Date(),
      },
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = { 
      type: 'CATEGORY_CREATE', 
      payload: {
        id:'goo',
        title: 'cool lulwa',
        timestamp: new Date(),
      },
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)
  })

  test('CATEGORY_DELETE should delete a category from the array', () => {
    let mockState = [
      { id: 'abc',  title: 'cool', timestamp: new Date()},
      { id: '123',  title: 'cool', timestamp: new Date()},
      { id: 'zyx',  title: 'cool', timestamp: new Date()},
      { id: '000',  title: 'cool', timestamp: new Date()},
    ]

    let actionOne= { 
      type: 'CATEGORY_DELETE', 
      payload: mockState[1],
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id != '123'))
  })

  test('CATEGORY_UPDATE should update a category in the array', () => {
    let mockState = [
      { id: 'abc',  title: 'cool', timestamp: new Date()},
      { id: '123',  title: 'cool', timestamp: new Date()},
      { id: 'zyx',  title: 'cool', timestamp: new Date()},
      { id: '000',  title: 'cool', timestamp: new Date()},
    ]

    let actionOne= { 
      type: 'CATEGORY_UPDATE', 
      payload: {id: 'zyx', title: 'hax', timestamp: new Date()},
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(4)
    expect(state).toEqual(mockState.map(item => 
      item.id == 'zyx' ? actionOne.payload : item))
  })

  test('CATEGORY_UPDATE should throw and error', () => {
    let mockState = [
      { id: 'abc',  title: 'cool', timestamp: new Date()},
    ]

    let actionOne= { 
      type: 'CATEGORY_UPDATE', 
      payload: {id: 'zyx', timestamp: new Date()},
    }

    expect(() => categoryReducer(mockState, actionOne))
    .toThrow('VALIDATION ERROR: category must have id, title, and timestamp')

  })


})
