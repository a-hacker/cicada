export default function createNewProject() {
  return {
    tickets: new Map(),
    projectName: '',
    issueFilter: '',
    pinnedIssues: []
  };
}
