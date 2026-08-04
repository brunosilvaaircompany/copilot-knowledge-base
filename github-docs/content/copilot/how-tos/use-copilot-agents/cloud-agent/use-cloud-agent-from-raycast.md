# Using Copilot cloud agent from Raycast

[Raycast](https://www.raycast.com/) is an extensible launcher for Windows and macOS. With the GitHub Copilot extension for Raycast, you can start and track Copilot cloud agent tasks and watch session logs live wherever you are on your computer.


## Prerequisites

1. Install Raycast from the [Raycast website](https://www.raycast.com).
1. Install the GitHub Copilot extension for Raycast by clicking the **Install Extension** button on the [extension's page](https://www.raycast.com/github/github-copilot).


## Starting a session

1. Open Raycast, search for "Copilot," find the **Create Task** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with GitHub**, then complete the authentication flow. Raycast will re-open.
1. Type a prompt describing what you want Copilot to do.

    For example, `Implement a user friendly message for common errors.`
1. Select the repository you want Copilot to work in.
1. Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
1. Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

1. Optionally, you can use the dropdown menu to select the model that Copilot will use. If the selected model supports configurable reasoning, you can also use the dropdown menu to select the reasoning level. For more information, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows) to start the task.

    Copilot will start a new session. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

> [!NOTE]
>
> If you are unable to select a specific repository when starting a task, the organization that owns the repository may have enabled OAuth app access restrictions. To learn how to request approval for the "GitHub Copilot for Raycast" OAuth app, see [Requesting Organization Approval For OAUTH Apps](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/requesting-organization-approval-for-oauth-apps).


## Assigning an issue from Raycast

1. Open Raycast, search for "Copilot," find the **Assign Issues to Copilot** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with GitHub**, then complete the authentication flow. Raycast will re-open.
1. Select the repository you want Copilot to work in.
1. Select the issue you want to assign to Copilot.
1. Optionally, select a base branch for Copilot's pull request. Copilot will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
1. Optionally, select a custom agent with specialized behavior and tools from the dropdown menu. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

1. Optionally, you can use the dropdown menu to select the model that Copilot will use. If the selected model supports configurable reasoning, you can also use the dropdown menu to select the reasoning level. For more information, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Optionally, provide additional instructions. These will be passed to Copilot alongside your issue contents.
1. Press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows) to assign the issue.

    Copilot will start a new session. Copilot will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

> [!NOTE]
>
> If you are unable to select a specific repository when starting a task, the organization that owns the repository may have enabled OAuth app access restrictions. To learn how to request approval for the "GitHub Copilot for Raycast" OAuth app, see [Requesting Organization Approval For OAUTH Apps](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/requesting-organization-approval-for-oauth-apps).


## Tracking your sessions

1. Open Raycast, search for "Copilot," find the **View Tasks** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with GitHub**, then complete the authentication flow. Raycast will re-open.
1. You'll see a list of your tasks. Select a task, then use the following keyboard shortcuts:
   * To watch the session logs live, press <kbd>Enter</kbd>. The logs update in real time, so you can monitor Copilot's progress without leaving Raycast.
   * To open the session logs in the browser, press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows).
   * To open the linked pull request, press <kbd>Command</kbd>+<kbd>P</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>P</kbd> (Windows).

> [!NOTE]
> If you are unable to see some tasks in Raycast, the organization that owns the repository may have enabled OAuth app access restrictions. To learn how to request approval for the "GitHub Copilot for Raycast" OAuth app, see [Requesting Organization Approval For OAUTH Apps](https://docs.github.com/en/account-and-profile/how-tos/organization-membership/requesting-organization-approval-for-oauth-apps).

## Further reading

* [Manage And Track Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [Get The Best Results](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)
