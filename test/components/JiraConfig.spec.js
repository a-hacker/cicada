/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JiraConfig from '../../app/components/JiraConfig';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    initializeSettings: spy(),
    saveSettings: spy()
  };
  const component = shallow(<JiraConfig jiraConfig={{}} {...actions} />);
  return {
    component,
    actions,
    host: component.find('[name="host"]'),
    username: component.find('[name="username"]'),
    token: component.find('[name="token"]')
  };
}

describe('JiraConfig component', () => {
  it('should initialize on render', () => {
    const { actions } = setup();
    expect(actions.initializeSettings.called).toBe(true);
  });

  it('should save host settings on update', () => {
    const { host, actions } = setup();
    host.at(0).simulate('change', { target: { value: 'a' } });
    expect(actions.saveSettings.calledOnceWith('host', 'a')).toBe(true);
  });

  it('should save username settings on update', () => {
    const { username, actions } = setup();
    username.at(0).simulate('change', { target: { value: 'a' } });
    expect(actions.saveSettings.calledOnceWith('username', 'a')).toBe(true);
  });

  it('should save token settings on update', () => {
    const { token, actions } = setup();
    token.at(0).simulate('change', { target: { value: 'a' } });
    expect(actions.saveSettings.calledOnceWith('token', 'a')).toBe(true);
  });
});
