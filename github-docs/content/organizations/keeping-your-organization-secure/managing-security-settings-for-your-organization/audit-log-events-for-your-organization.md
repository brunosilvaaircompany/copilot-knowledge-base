# Audit log events for your organization

> [!NOTE]
> * This article contains the events available in the latest version of GitHub Enterprise Server. Some of the events may not be available in previous versions.
> * This article contains the events that may appear in your organization's audit log. For the events that can appear in a user account's security log or the audit log for an enterprise, see [Security Log Events](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/security-log-events) and [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).
> * Webhooks might be a good alternative to the audit log or API polling for certain use cases. Webhooks are a way for GitHub to notify your server when specific events occur for a repository, organization, or enterprise. Compared to the API or searching the audit log, webhooks can be more efficient if you just want to learn and possibly log when certain events occur on your enterprise, organization, or repository. See [Webhooks](https://docs.github.com/en/webhooks).


## About audit log events for your organization

The name for each audit log entry is composed of a category of events, followed by an operation type. For example, the `repo.create` entry refers to the `create` operation on the `repo` category.
 The reference information in this article is grouped by categories.
