# Scheduling pull request reminders in Teams

You can schedule reminders for pending pull request reviews in Microsoft Teams channels or in the GitHub personal app. Reminders are available for organizations, not personal accounts.

## Scheduling reminders in a channel

1. In a Teams channel, run `@GitHub Notifications schedule ORGANIZATION`.
1. Select **Create new reminder**.
1. Configure the days, times, timezone, and repository or team filters for the reminder.
1. Save the reminder.

To edit or remove reminders for the organization, run `@GitHub Notifications schedule ORGANIZATION` again. To list all reminders configured in the channel, run `@GitHub Notifications schedule list`.

## Scheduling reminders in the personal app

1. Open the GitHub personal app in Teams.
1. Run `schedule ORGANIZATION`.
1. Select **Create new reminder** and configure your reminder settings.
1. Save the reminder.

In the personal app, you can list reminders with `schedule list`.

>[!NOTE] To configure reminders for an organization, you must be a member of the organization and have write access to at least one repository.

## Further reading

* [Customize Notifications](https://docs.github.com/en/integrations/how-tos/teams/customize-notifications)
* [Teams Command Reference](https://docs.github.com/en/integrations/reference/teams-command-reference)
