import { stub } from 'sinon';
import settings from 'electron-settings';
import * as actions from '../../app/actions/jiraConfig';

beforeAll(() => {
  stub(settings, 'set').returns();
  stub(settings, 'get').returns('testValue');
});

describe('actions', () => {
  it('should initialize base settings', () => {
    const actual = actions.initializeSettings();
    expect(actual).toHaveProperty('context');
    expect(actual.context).toHaveProperty('host');
    expect(actual.context).toHaveProperty('username');
    expect(actual.context).toHaveProperty('token');
  });

  it('should trigger save settings action', () => {
    expect(actions.saveSettings('host', 'my-jira.com')).toMatchObject({
      type: actions.SET_SETTINGS
    });
  });

  it('should save settings with context', () => {
    expect(actions.saveSettings('host', 'my-jira.com')).toMatchObject({
      context: { name: 'host', value: 'my-jira.com' }
    });
  });
});
