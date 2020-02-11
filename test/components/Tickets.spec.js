/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../../app/components/Tickets';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    initialize: spy(),
    addTicket: spy()
  };
  const component = shallow(<Counter tickets={[]} {...actions} />);
  return {
    component,
    actions
  };
}

describe('Tickets component', () => {
  it('should initialize on render', () => {
    const { actions } = setup();
    expect(actions.initialize.called).toBe(true);
  });
});
