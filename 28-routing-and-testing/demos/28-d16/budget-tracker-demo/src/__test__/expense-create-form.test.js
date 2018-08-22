import React from 'react'
import {shallow} from 'enzyme'
import ExpenseCreateForm from '../component/expense-create-form'

describe('testing ExpenseCreateForm', () => {
  test('should have correct defalt state', () => {
    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('')
    expect(wrapper.state('price')).toBe(0)
  })

  test('expect submit to invoke handleExpenseCreate', () => {
    let expenseCreate = (expense) => {
      expect(expense.title).toEqual('')
      expect(expense.price).toEqual(0)
    }

    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={expenseCreate} />)
    wrapper.find('form').simulate('submit')
  })
})
