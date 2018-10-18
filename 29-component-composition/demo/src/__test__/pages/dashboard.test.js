import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({adapter: new Adapter});
import Dashboard from '../../pages/Dashboard';

describe('Dashboard component', () => {

  it('should have an initial state with an empty notes array', () => {
    let wrapper = Enzyme.shallow(<Dashboard/>);

    expect(wrapper.state('notes').length).toBe(0);
  });

  it('calls componentDidMount', () => {
    const spy = sinon.spy(Dashboard.prototype, 'componentDidMount');
    let wrapper = Enzyme.shallow(<Dashboard/>);

    expect(spy.calledOnce).toBe(true);
  });

});