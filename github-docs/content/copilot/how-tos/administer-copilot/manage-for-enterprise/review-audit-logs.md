# Reviewing audit logs for GitHub Copilot

You can use the audit log to review actions taken in your enterprise. The audit log includes a record of:

* Changes to your Copilot plan, such as changes to settings and policies or a user losing or receiving a license
* Agent activity on the GitHub website

The audit log does **not** include client session data, such as the prompts a user sends to Copilot locally. A custom solution is required to access this data: for example, some companies use custom hooks to send Copilot CLI events to their own logging service.

## Viewing your enterprise's audit logs


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.


## Searching audit log events

Use the `action:copilot` search term to view all events related to your Copilot plan.

You can also filter by a specific event. For example, `action:copilot.cfb_seat_assignment_created` returns events related to a license being assigned to a new user. For a full list of Copilot events, see [Audit Log Events For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) or [Audit Log Events For Your Organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

To view a record of agent activity, use the `actor:Copilot` search term. See [Agentic Audit Log Events](https://docs.github.com/en/copilot/reference/enterprise-administrators/agentic-audit-log-events).

> [!NOTE]
> For team-based seat assignments, the `copilot.cfb_seat_added` event's actor may not be the account that performed the membership change. See [Seat Assignment](https://docs.github.com/en/copilot/reference/copilot-billing/seat-assignment#seat-assignment-management).

## Retaining audit log history

The audit log retains events for the last 180 days. We recommend streaming the audit log to a Security Information and Event Management (SIEM) platform, where you can view long-term history and set up alerts for anomalous activity. See [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).
