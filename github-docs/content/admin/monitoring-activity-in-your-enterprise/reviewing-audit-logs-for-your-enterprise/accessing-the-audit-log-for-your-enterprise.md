# Accessing the audit log for your enterprise

There are several ways to access and retain audit log data for your enterprise:

* **Web interface**: View recent activity in your enterprise settings. See [Viewing the enterprise's audit log via the web interface](#viewing-the-enterprises-audit-log-via-the-web-interface).
* **JSON/CSV exports**: Download a file of audit log activity. See [Exporting Audit Log Activity For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).
* **REST API endpoint**: Query audit log events programmatically. See [Using The Audit Log API For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).
* **Streaming to an external system**: Deliver events continuously to a system that your incident responders can access and query. See [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

Each method exposes a different subset of your audit log data. For the full list of events, see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Audit log data available by access method

{% rowheaders %}

| Data available | Web interface | JSON/CSV exports | REST API endpoint | Streaming to an external system |
| :- | :-: | :-: | :-: | :-: |
| Range of web events | 180 days | 180 days | 180 days | Determined by the retention policy of your external system |
| [API request events](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#api) | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} (If enabled) |
| [Git events](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} (JSON only). The audit log retains Git events for seven days.
 | {% octicon "check" aria-label="Available" %}. The audit log retains Git events for seven days.
 | {% octicon "check" aria-label="Available" %} |
| Single sign-on responses (organization and enterprise) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Created and completed workflow runs](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Started workflow jobs, including the secrets provided to each job](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| Online and offline self-hosted runners | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |

{% endrowheaders %}


For enterprises that use Enterprise Managed Users, the enterprise audit log also includes user events. For a list of these user events, see [Security Log Events](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/security-log-events).

To retain Git events beyond their availability in the audit log, save them to external storage before they expire. Configure audit log streaming in advance to collect events continuously.

Git event exports do not include events initiated through the web interface or the REST or GraphQL APIs. For example, when someone merges a pull request in the web interface, the resulting push to the base branch is missing from the export.

`api.request` events are available only in streamed enterprise audit logs, and only when the option to stream API request events has been enabled. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests). 

> [!IMPORTANT]
> Audit log streaming only includes activity from the time you enable it. Enabling it during an incident will not recover earlier activity.


## Preparing for an incident response

Enable enterprise audit log streaming, API request event streaming, and source IP address disclosure to prepare for incident response. Without all three features enabled, responders will have critical visibility gaps when investigating incidents affecting your enterprise or its organizations. Set an appropriate retention period for the streamed logs and ensure incident responders can access them.

For setup instructions, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-audit-log-streaming), [Enabling audit log streaming of API requests](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests), and [Displaying Ip Addresses In The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).

**During a security incident**, GitHub Support can answer questions about features and available data, but does not investigate on your behalf or preserve logs for your investigation. For more information, see [Understanding How GitHub Support Can Help During A Security Incident](https://docs.github.com/en/support/learning-about-github-support/understanding-how-github-support-can-help-during-a-security-incident).




## Viewing the enterprise's audit log via the web interface

The audit log lists events triggered by activities that affect your enterprise. Audit logs for GitHub are retained indefinitely, unless an enterprise owner configured a different retention period. See [Configuring The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise).

By default, only events from the past three months are displayed. To view older events, you must specify a date range with the `created` parameter. See [Understanding The Search Syntax](https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.
