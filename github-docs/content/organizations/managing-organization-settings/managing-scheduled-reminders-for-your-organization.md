# Managing scheduled reminders for your organization

## About scheduled reminders for pull requests

Scheduled reminders help teams focus on the most important review requests that require their attention. Scheduled reminders for pull requests will send a message to your team in Slack with all open pull requests that you or your team have been asked to review, at a specified time. For example, you can create a scheduled reminder to send a message to your team's main communication channel in Slack, including all open pull requests that the team is requested to review, every Wednesday at 9:00 a.m.


Organization owners can schedule a reminder for one or more teams in their organization, for all pull requests the team or teams have been requested to review.

Each reminder is only triggered for up to **five** repositories. Users can either select up to five specific repositories, or allow the system to automatically choose the five repositories with the oldest average pull request age. For each repository, up to 20 of the oldest pull requests will be shown.

This limit is **per reminder configuration** and **per repository owner**. If you want reminders for more than five repositories per owner, you can configure additional reminders.

> [!NOTE]
> Reminders are not sent when changes are merged from upstream into a fork.


## Creating a scheduled reminder for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Integrations" section of the sidebar, click **{% octicon "clock" aria-hidden="true" aria-label="clock" %} Scheduled reminders**.

1. Under "Scheduled reminders", click **Add your first reminder**.

1. Under "Slack workspace", click **Authorize Slack workspace** and follow the instructions.

1. Under "Slack channel", type the name of the Slack channel where you'd like to receive notifications.
   > [!TIP]
   > If this Slack channel is private, you will need to invite the integration into the channel: `/invite @github`. In addition, you need to ask users to run `/github signin` in one of their Slack channels, otherwise they will not be @mentioned. For more information, see [Getting started](https://github.com/integrations/slack?tab=readme-ov-file#getting-started) in the Slack integrations documentation.

1. Under "Days", click **Weekdays** {% octicon "triangle-down" aria-label="The down triangle icon" %} to select one or more days you'd like to receive scheduled reminders.

1. Under "Times", click **9:00 AM** {% octicon "triangle-down" aria-label="The down triangle icon" %} to select one or more times you'd like to receive scheduled reminders. Optionally, to change your timezone, click {% octicon "triangle-down" aria-label="The down triangle icon" %} next to your current timezone and select a different time zone.
![Screenshot of Scheduled reminder options used to select the hour and time zone for reminders. 9:00 AM and 10:00 AM are checked in the open hours menu.](/assets/images/help/settings/scheduled-reminders-times.png)

1. Under "Tracked repositories," choose which repositories you'd like the team to receive pull request review reminders for.
   * To receive reminders for all repositories that the chosen team has access to, click **All repositories**.
   * To receive reminders for a subset of repositories, click **Only select repositories**, then select one or more repositories that the chosen team has access to.

1. Under "Filter by team assigned to review code", select the **Add a team** dropdown menu and click one or more teams. You can add up to 100 teams. If the team you select doesn't have access to the "Tracked repositories" selected above, you won't be able to create the scheduled reminder.
1. Optionally, to exclude draft pull requests from scheduled reminders, select **Ignore drafts**. For more information, see [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests).

1. Optionally, to only include pull requests where a review is specifically requested from the team or a team member, select **Require review requests**. If you don't select this option, all pull requests are included in the scheduled reminder.

1. Optionally, to send reminders to the pull request authors after the review requests have been fulfilled, select **Remind authors after reviews** and choose the number of reviews required before a reminder is sent.

1. Optionally, to turn off scheduled reminders for pull requests that have already been reviewed and approved, select **Ignore approved pull requests**. Then, click **Ignore with 1 or more approvals** to choose how many approvals a pull request must have to be ignored.

1. Under "Minimum age", type the age of a pull request, in hours. Scheduled reminders won't include pull requests that are newer than this age limit.

1. Under "Minimum staleness", type the time since the last activity on a pull request, in hours. Scheduled reminders won't include pull requests whose last activity was more recent than this time.

1. Under "Ignored terms", type a comma-separated list of terms that may appear in titles of pull requests. Scheduled reminders won't include any pull requests that contain one or more of these terms in their titles.

1. Under "Ignored labels", type a comma-separated list of labels. Scheduled reminders won't include any pull requests that have one or more of these labels.

1. Under "Required labels", type a comma-separated list of labels. Scheduled reminders will only include pull requests that haven't already been ignored, if they have one or more of these labels.

1. Click **Create reminder**.

1. Optionally, to test your reminder, click {% octicon "megaphone" aria-label="The button to send a test reminder" %}.


## Managing a scheduled reminder for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Integrations" section of the sidebar, click **{% octicon "clock" aria-hidden="true" aria-label="clock" %} Scheduled reminders**.

1. Next to the scheduled reminder you'd like to update, click **Edit**.

1. Make one or more changes to your scheduled reminder.

1. To save your changes, click **Update reminder**.

1. Optionally, to test your reminder, click {% octicon "megaphone" aria-label="The button to send a test reminder" %}.


## Deleting a scheduled reminder for an organization

1. In the upper-right corner of GitHub, click your profile picture, then click **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations**.

1. Select an organization by clicking on it.
1. Under your organization name, click **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**. If you cannot see the "Settings" tab, select the **{% octicon "kebab-horizontal" aria-label="More" %}** dropdown menu, then click **Settings**.

   ![Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.](/assets/images/help/discussions/org-settings-global-nav-update.png)


1. In the "Integrations" section of the sidebar, click **{% octicon "clock" aria-hidden="true" aria-label="clock" %} Scheduled reminders**.

1. At the bottom of the page, click **Delete this reminder**.
1. To confirm that you want to delete the scheduled reminder, click **OK**.


## Further reading

* [Getting started](https://github.com/integrations/slack?tab=readme-ov-file#getting-started) in the Slack integrations documentation
* [Managing Your Scheduled Reminders](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-your-scheduled-reminders)
* [Managing Scheduled Reminders For Your Team](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
