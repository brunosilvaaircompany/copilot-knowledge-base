# REST API endpoints for issue events

## About events

You can use the REST API to view different types of events triggered by activity in issues and pull requests. For more information about the specific events that you can receive, see [Issue Event Types](https://docs.github.com/en/rest/using-the-rest-api/issue-event-types). To view GitHub activity outside of issues and pull requests, you can use the [Events](/rest/using-the-rest-api/github-event-types) endpoints.

Every pull request is an issue, but not every issue is a pull request. For this reason, "shared" actions for both features, like managing assignees, labels, and milestones, are provided within the Issues endpoints.
