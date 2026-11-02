# Command reference for the GitHub integration in Teams

Use these commands in a Microsoft Teams channel by prefixing them with `@GitHub Notifications`. In the GitHub personal app, omit the prefix.



The combined **GitHub** app includes notifications and Copilot. Updating from **GitHub Notifications** preserves existing subscriptions and reminders. Subscription and schedule commands work in channels and the personal app. Copilot also works in group chats.



## Notification commands

|Command|Description|
|---|---|
|`@GitHub Notifications help`|Display help documentation.|
|`@GitHub Notifications signin`|Connect your GitHub account.|
|`@GitHub Notifications subscribe OWNER/REPO`|Subscribe a channel to a repository.|
|`@GitHub Notifications subscribe OWNER/REPO [FEATURE]`|Subscribe a channel to specific notification features.|
|`@GitHub Notifications subscribe list`|List subscriptions in the channel.|
|`@GitHub Notifications subscribe list features`|List subscriptions and subscribed features in the channel.|
|`@GitHub Notifications unsubscribe OWNER/REPO`|Unsubscribe a channel from a repository.|
|`@GitHub Notifications unsubscribe OWNER/REPO [FEATURE]`|Unsubscribe a channel from specific features.|
|`@GitHub Notifications schedule ORGANIZATION`|List and manage reminders for the organization in this channel.|
|`@GitHub Notifications schedule list`|List all reminders configured in this channel.|
|`@GitHub Notifications signout`|Disconnect your GitHub account and remove subscriptions.|

For the list of supported notification features, see [Customize Notifications](https://docs.github.com/en/integrations/how-tos/teams/customize-notifications).



## Copilot settings and requests

Use `@GitHub settings` to choose default repositories for a channel or group chat. Channel defaults apply to new conversations and are shared with other channel members. There are no default repositories for personal chats, so name the repositories in your prompt instead.

The following are natural-language requests, not subscription commands:

|Request|Purpose|
|---|---|
|`@GitHub help`|Discover available capabilities.|
|`@GitHub Investigate this failed workflow and propose a fix.`|Delegate work from a repository notification.|
|`@GitHub Update the API in octo-org/service and its client in octo-org/web.`|Work across related repositories owned by the same account or organization.|
|`@GitHub Choose a model for this conversation.`|Choose a model for the current conversation without changing channel defaults.|
|`@GitHub Create a pull request to update the setup guide repo=OWNER/REPO branch=BRANCH-NAME`|Choose a repository and an existing base branch for a task.|

A session supports up to 11 repositories from the same owner. To start or steer work, you need write access to every selected repository. Choosing repositories for agent work doesn't create notification subscriptions or review reminders.

For MCP servers, models, and Copilot Memory, see [Integrate Cloud Agent With Teams](https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams).
