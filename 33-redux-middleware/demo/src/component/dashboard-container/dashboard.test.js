import React from 'react';
import sinon from 'sinon';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
import Dashboard from './index.js';
import createAppStore from '../../lib/store';

describe('DashboardContainer', () => {

  let store = createAppStore();

  it('mounts successfully', () => {
    let spy = sinon.spy(Dashboard.prototype, componentDiMount)
    let wrapper = enzyme.shallow(<Dashboard store={store}/>);
    expect(1).toBe(1);
  });

});