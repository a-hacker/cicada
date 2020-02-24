export default function parseIssueData(issue) {
  return {
    key: issue.key,
    summary: issue.fields.summary,
    description: issue.fields.description,
    status: {
      color: issue.fields.status.statusCategory.colorName,
      name: issue.fields.status.name
    },
    assignee: issue.fields.assignee.displayName,
    issueType: issue.fields.issuetype.name,
    project: {
      fullName: issue.fields.project.name,
      key: issue.fields.project.key
    }
  };
}
