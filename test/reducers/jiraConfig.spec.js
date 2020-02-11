import jiraConfig from '../../app/reducers/jiraConfig';
import {
  SET_SETTINGS,
  INITIALIZE_SETTINGS
} from '../../app/actions/jiraConfig';

describe('reducers', () => {
  describe('jiraConfig', () => {
    it('should handle initial state', () => {
      expect(jiraConfig(undefined, {})).toEqual({});
    });

    it('should handle SET_SETTINGS with new key', () => {
      const context = { name: 'host', value: 'testVal' };
      expect(jiraConfig({}, { type: SET_SETTINGS, context })).toMatchObject({
        host: 'testVal'
      });
    });

    it('should handle SET_SETTINGS with existing key', () => {
      const context = { name: 'host', value: 'testVal' };
      expect(
        jiraConfig({ host: 'oldval' }, { type: SET_SETTINGS, context })
      ).toMatchObject({
        host: 'testVal'
      });
    });

    it('should initialize to given context', () => {
      const context = { host: 'my-host', token: 'my-token' };
      expect(
        jiraConfig({}, { type: INITIALIZE_SETTINGS, context })
      ).toMatchObject(context);
    });

    it('should handle unknown action type', () => {
      expect(jiraConfig({}, { type: 'unknown' })).toEqual({});
    });
  });
});
