# Notifications for workflow runs

If you enable email or web notifications for GitHub Actions, you'll receive a notification when any workflow runs that you've triggered have completed. The notification will include the workflow run's status (including successful, failed, neutral, and canceled runs). You can also choose to receive a notification only when a workflow run has failed. For more information about enabling or disabling notifications, see [About Notifications](https://docs.github.com/en/subscriptions-and-notifications/concepts/about-notifications).

Notifications for scheduled workflows are sent to the user who initially created the workflow.
 * If a different user updates the cron syntax, in the `schedule` event in the workflow file, subsequent notifications will be sent to that user instead.
 * If a scheduled workflow is disabled and then re-enabled, notifications will be sent to the user who re-enabled the workflow rather than the user who last modified the cron syntax.

You can also see the status of workflow runs on a repository's Actions tab. For more information, see [Manage Workflow Runs](https://docs.github.com/en/actions/how-tos/manage-workflow-runs).
