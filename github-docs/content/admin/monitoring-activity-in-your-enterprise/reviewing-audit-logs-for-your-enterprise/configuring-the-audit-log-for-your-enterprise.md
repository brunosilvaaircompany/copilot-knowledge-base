# Configuring the audit log for your enterprise

## About audit log configuration

You can configure a retention period for audit log data and see index storage details.

After you configure a retention period, you can enable or disable Git-related events from appearing in the audit log.

## Configuring a retention period for audit log data

You can configure a retention period for audit log data for your GitHub Enterprise Server instance. Data that exceeds the period you configure will be permanently removed from disk.


1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Audit Data Retention**.

1. Under "Configure audit log retention settings", select the dropdown menu and click a retention period.
1. Click **Save**.

## Managing Git events in the audit log

You can enable or disable Git-related events, such as `git.clone` and `git.push`, from appearing in your audit log. For a list of the Git events are logged, see [Audit Log Events For Your Enterprise](https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git).

If you do enable Git events, due to the large number of Git events that are logged, we recommend monitoring your instance's file storage and reviewing your related alert configurations. For more information, see [Recommended Alert Thresholds](https://docs.github.com/en/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds#monitoring-storage).

Before you can enable Git events in the audit log, you must configure a retention period for audit log data other than "infinite." For more information, see [Configuring a retention period for audit log data](#configuring-a-retention-period-for-audit-log-data).

> [!NOTE]
> Git events are not included in search results.



1. In the top-right corner of GitHub Enterprise Server, click your profile picture, then click **Enterprise settings**.


1. At the top of the page, click {% octicon "gear" aria-hidden="true" aria-label="gear" %} **Settings**.

1. Under "Settings", click **Audit log**.

1. Under "Audit log", click **Audit Data Retention**.

1. Under "Git event opt-in", select or deselect **Enable git events in the audit-log**.

   > [!NOTE]
   > The retention policy must be set to something other than infinite for this option to display.

   ![Screenshot of the audit log. The checkbox to enable Git events in the audit log is highlighted with an orange outline.](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Click **Save**.
