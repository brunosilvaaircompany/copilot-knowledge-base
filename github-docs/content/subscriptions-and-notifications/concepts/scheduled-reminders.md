# Scheduled reminders

Scheduled reminders are used to make sure that users focus on the most important review requests that require their attention. Scheduled reminders for pull requests will send a message to you in Slack with open pull requests needing your review at a specified time. For example, you can setup scheduled reminders to send you a message in Slack every morning at 10 AM with pull requests needing to be reviewed by you or one of your teams.

For certain events, you can also enable real-time alerts for scheduled reminders. Real-time alerts get sent to your Slack channel as soon as an important event, such as when you are assigned a review, is triggered by another user.

You can set scheduled reminders for personal or team-level review requests for pull requests in organizations you are a member of. Before you can create a scheduled reminder for yourself, an organization owner must authorize your Slack workspace. For more information, see [Managing Scheduled Reminders For Your Organization](https://docs.github.com/en/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization).

Each reminder is only triggered for up to **five** repositories. Users can either select up to five specific repositories, or allow the system to automatically choose the five repositories with the oldest average pull request age. For each repository, up to 20 of the oldest pull requests will be shown.

This limit is **per reminder configuration** and **per repository owner**. If you want reminders for more than five repositories per owner, you can configure additional reminders.

> [!NOTE]
> Reminders are not sent when changes are merged from upstream into a fork.


## Next steps

To learn how to set up and control scheduled reminders, see [Managing Your Scheduled Reminders](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-your-scheduled-reminders).
