import * as actions from '../../app/actions/projects';

describe('projectActions', () => {
  describe('addProject', () => {
    it('should add project name to context', () => {
      const actual = actions.addProject('test project');
      expect(actual).toHaveProperty('context');
      expect(actual.context).toMatchObject({ projectName: 'test project' });
    });

    it('should fire an ADD_PROJECT event', () => {
      const actual = actions.addProject('test project');
      expect(actual).toMatchObject({ type: actions.ADD_PROJECT });
    });
  });

  describe('setProjcet', () => {
    it('should add project name to context', () => {
      const actual = actions.setProject('test project');
      expect(actual).toHaveProperty('context');
      expect(actual.context).toMatchObject({ projectName: 'test project' });
    });

    it('should fire a SET_PROJECT event', () => {
      const actual = actions.setProject('test project');
      expect(actual).toMatchObject({ type: actions.SET_PROJECT });
    });
  });
});
