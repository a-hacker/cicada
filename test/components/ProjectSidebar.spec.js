/* eslint react/jsx-props-no-spreading: off */
import { spy } from 'sinon';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectSidebar from '../../app/components/ProjectSidebar';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    addProject: spy(),
    toggleSidebar: spy(),
    setProject: spy()
  };
  const sampleProjects = [
    {
      projectName: 'TEST-123'
    },
    {
      projectName: 'TEST-321'
    }
  ];

  const component = mount(
    <ProjectSidebar projects={sampleProjects} sidebarOpen {...actions} />
  );
  return {
    component,
    actions,
    firstProject: component.find('#project-0 > button'),
    secondProject: component.find('#project-1 > button'),
    addButton: component.find('#project-sidebar > button')
  };
}

describe('ProjectSidebar component', () => {
  it('should set project on button click', () => {
    const { firstProject, actions } = setup();
    firstProject.simulate('click');
    expect(actions.setProject.calledOnceWith('TEST-123')).toBe(true);
  });

  it('should add project on button click', () => {
    const { addButton, actions } = setup();
    addButton.simulate('click');
    expect(actions.addProject.calledOnceWith('TEST')).toBe(true);
  });
});
