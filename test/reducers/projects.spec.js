import projects from '../../app/reducers/projects';
import { ADD_PROJECT, SET_PROJECT } from '../../app/actions/projects';

const baseState = {
  projects: [{ projectName: 'OLD-555' }],
  currentProject: {}
};

describe('reducers', () => {
  describe('projects', () => {
    it('should handle initial state', () => {
      expect(projects(undefined, {})).toEqual({
        projects: [],
        currentProject: {}
      });
    });

    it('should add projects on ADD_PROJECT', () => {
      const context = { projectName: 'TEST-123' };
      const exceptedState = {
        projects: [{ projectName: 'OLD-555' }, { projectName: 'TEST-123' }],
        currentProject: {}
      };
      expect(projects(baseState, { type: ADD_PROJECT, context })).toMatchObject(
        exceptedState
      );
    });

    it('should set current project on SET_PROJECT', () => {
      const context = { projectName: 'OLD-555' };
      const exceptedState = {
        projects: [{ projectName: 'OLD-555' }],
        currentProject: { projectName: 'OLD-555' }
      };
      expect(projects(baseState, { type: SET_PROJECT, context })).toMatchObject(
        exceptedState
      );
    });

    it('should handle unknown action type', () => {
      expect(projects({}, { type: 'unknown' })).toEqual({});
    });
  });
});
