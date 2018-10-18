import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({adapter: new Adapter});
import NoteForm from '../../components/NoteForm/NoteForm';

describe('NoteForm component', () => {

  it('should handle change on title input', () => {
    // ARRANGE
    let onChange = sinon.spy(NoteForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteForm />);
    const event = {target: {
      name: "title",
      value: "s"
    }};

    // ACT
    wrapper.find('input[name="title"]').simulate('change', event);

    // ASSERT
    expect(onChange.callCount).toBe(1);
  });

});