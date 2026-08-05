# Exporting audit log activity for your enterprise

## About exports of audit log and Git events data

You can export the audit log by downloading a JSON or CSV file from your enterprise on GitHub. When you export audit log events, you can query by one or more of these supported qualifiers to filter for specific log events to export. See [Searching The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed).

The audit log lists events triggered by activities that affect your enterprise within the last 180 days. The audit log retains Git events for seven days.


You can export Git events data by downloading a JSON file from your enterprise audit log. Unlike audit log data, you cannot query for specific Git events to filter and export in the audit log user interface.



> [!NOTE]
> When you export Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. For example, when a user merges a pull request in the web browser, changes are pushed to the base branch, but the Git event for that push is not included in the export.




As an alternative to exporting log events, you can use the API to retrieve audit log events. For more information, see [Using The Audit Log API For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).

### Export limits



There is a hard limit when exporting the audit logs for your enterprise. These limits are either:

* **100 MB** compressed file, or
* **10 minutes** export processing time, or
* **both**.

To avoid these limits, we recommend filtering the audit log to a smaller dataset before exporting. For more information, see [Searching The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise).

If you intend to review a large dataset of audit logs, we recommend streaming your logs to an external data management system. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).




### Exported log keys and values

After you export the log, you'll see the following keys and values in the resulting file.

| Key | Example value
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `actor_location.country_code` | US
| `org` | octo-org
| `repo` | octo-org/documentation
| `created_at` | 1429548104000 (Timestamp shows the time since Epoch with milliseconds.)
| `data.email` | octocat@nowhere.com
| `data.hook_id` | 245
| `data.events` | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
| `data.events_were` | ["push", "pull_request", "issues"]
| `data.target_login` | octocat
| `data.old_user` | hubot
| `data.team` | octo-org/engineering


## Exporting audit log data


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Optionally, to only export filtered results, search by one or more supported qualifiers or log filters.
1. Select the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export** dropdown menu, and click a file format.

## Exporting Git events data

You can also export Git events data by date range. The data is exported as a compressed, newline-delimited JSON file.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Select the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export Git Events** dropdown menu and choose a date range to export log events for.
1. Click **{% octicon "file-zip" aria-hidden="true" aria-label="file-zip" %} Download Results**.
1. To extract the JSON data, uncompress the file using an archive utility client or command. For example:

    ```shell
    gunzip export-avocado-corp-1642896556.json.gz
    ```
