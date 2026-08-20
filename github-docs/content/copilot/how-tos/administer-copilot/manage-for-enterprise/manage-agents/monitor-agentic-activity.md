# Monitoring agentic activity in your enterprise

## Viewing active and recent agentic sessions in your enterprise


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. Towards the top of the page, in the "Agent sessions" section, you will see the three most recent agent sessions in your enterprise. To view all agent sessions from the last 24 hours, click **View all**.
1. To filter agent sessions, click the search bar at the top of the list, then press <kbd>Space</kbd>. From the dropdown menu that appears, select your filter criteria. For a list of available filters, see [Agent Session Filters](https://docs.github.com/en/copilot/reference/enterprise-administrators/agent-session-filters).

## Tracking agentic activity in your enterprise through the audit log

Track agentic activity on GitHub or through streaming to an external destination.

### Viewing agentic activity in the audit log on GitHub


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} AI controls**.

1. At the bottom of the page, click {% octicon "log" aria-hidden="true" aria-label="log" %} **Audit logs**.

### Streaming agentic activity from the audit log

>[!NOTE] This feature is in public preview and is available for enterprises that use Enterprise Managed Users and for enterprises that use GitHub Enterprise Cloud with data residency.

To enable streaming for Copilot agent session events and configure a streaming destination from your enterprise audit log settings, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-copilot-agent-session-events).

In addition to streaming, you can also retrieve Copilot usage data through the REST API. See [Copilot Usage Metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics#get-copilot-usage-records-for-an-enterprise).
