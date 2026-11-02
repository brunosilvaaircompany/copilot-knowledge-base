# Integrating Copilot cloud agent with Teams

> [!NOTE]
> GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

The GitHub integration in Microsoft Teams lets you work with Copilot cloud agent from your Teams conversations. You can start cloud agent sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. You can also choose the model, connect Model Context Protocol (MCP) servers, work across multiple repositories, and use Copilot Memory. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

You can reply to a GitHub notification in a channel, group chat, or private chat and @mention GitHub to delegate a task to Copilot. Copilot uses the linked issue or pull request and the conversation in the thread to understand the task. It can investigate issues, reproduce bugs, run tests, implement changes, and prepare a pull request for review.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/about-copilot-integrations).

## Security considerations

Before you @mention GitHub in Teams, consider that Copilot cloud agent captures the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the GitHub app for Teams instead.

## Understanding collaborative sessions, permissions, and sandboxes

The identity Copilot uses depends on whether you interact with it in a direct message or a shared context.

* When you use Copilot in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked GitHub personal account to take these actions.

* When you use Copilot in a shared context, such as a group thread or channel, Copilot creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > Pull requests created in a shared context by Copilot use the app's identity. If you use repository rulesets, because these pull requests aren't attributed to a person, one more approval is required before merging, as long as the repository already requires at least one approval. This is enabled by default. See [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#additional-approval-for-unattributed-copilot-pull-requests).


Only users with **write** access to every repository selected for a session can trigger Copilot to make changes or steer that session, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with Copilot in Teams.

Copilot uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

When you ask Copilot to perform a task, it displays details about the session, such as the working repositories, issue or pull request links, model used, and a task status or summary.

### Secure cloud sandboxes

When Copilot cloud agent starts work on a task from Teams, Copilot continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready.

You can keep steering from Teams, or continue the work on the agent-generated artifacts in GitHub, the terminal, or your preferred code editor.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Teams account.
* If you get Copilot through an organization or enterprise, including an enterprise with managed users, the Copilot cloud agent policy is enabled by default, but an owner can turn it off. Copilot runs your Teams sessions in a cloud sandbox, which doesn't need a separate setting. See [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).



## Installing the GitHub app in Teams

The GitHub app only needs to be installed once in a team. After the app is installed, any member of the team can connect their GitHub account to the app and start using it.

The combined **GitHub** app includes both repository notifications and Copilot. If your team already uses **GitHub Notifications**, update that app to get the combined experience. Existing subscriptions and scheduled reminders are preserved.

1. Open the [GitHub integration installation link](https://teams.microsoft.com/l/app/ca9e26b7-dce5-44a0-b2b7-a70a3d65ce25) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the GitHub app to your GitHub account

The first time you use the GitHub app in Teams, you need to connect it to your GitHub account. Then if prompted, set a default repository.

In a channel, the default repository provides the context that Copilot uses when responding to prompts, and it's also where issues and pull requests created by Copilot cloud agent sessions are opened unless you specify a repository in your prompt. You can't set a default repository for direct messages, so name the repositories in your prompt instead.

To get started:

1. In Teams, @mention the app in a message by typing `@GitHub`.
1. Follow the prompts to connect your GitHub account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@GitHub help`.

## Starting a GitHub Copilot session from your team conversation

@Mention the app in a channel, group chat, or personal chat by typing `@GitHub` followed by your task. You must have `write` access to every repository selected for the session. The agent responds with a summary of planned changes and links to the artifacts it creates.

For example, to ask the agent to create a pull request on a particular branch in a repository, you can type:

```text
@GitHub Create a pull request to YOUR-PROMPT repo=OWNER/REPO branch=BRANCH-NAME
```

The `repo` parameter tells Copilot which repository to use, and the `branch` parameter specifies an existing branch to use as the base branch for a pull request.

Anyone in the conversation can add context or correct assumptions, and participants with the required permissions can steer the agent. Because work continues asynchronously, you can pick up the resulting work later on GitHub.com, in Copilot CLI, or in the Copilot app.

### Working across multiple repositories

A session can work with up to 11 repositories owned by the same organization or personal account. You must have write access to every selected repository. Select the repositories when you start the task, or name them in your prompt. For example:

```text
@GitHub Update the API in octo-org/service and its client in octo-org/web. Open a pull request in each repository and link the changes.
```

Changes to a channel's default repositories apply to new conversations, not to a running session.

## Iterating on work in the thread

To refine the pull request, @mention `@GitHub` in the same thread with your requested changes. Copilot incorporates all messages since the previous @mention to iterate on the work, keeping the discussion and implementation connected.

## Monitoring session progress in the canvas

When Copilot starts a session, it displays an **Open canvas** button. The canvas opens beside your conversation so you can monitor progress without leaving Teams. It shows:

* The plan Copilot is following to make changes.
* The file changes Copilot makes.
* An overview of the pull requests Copilot creates.

The canvas is read-only. It shows only content you're already authorized to view on GitHub, based on your linked GitHub account and your repository access.

## Creating issues with Copilot

You can ask Copilot to create GitHub issues directly from Teams, turning conversations into actionable tasks. Describe what you need in natural language, and Copilot creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

## Customizing Copilot cloud agent in Teams

Use `@GitHub settings` to choose repositories for a channel or group chat. These settings are separate from notification subscriptions and scheduled reminders.

1. To see and change your channel settings, mention the app in a message by typing:

   ```text
   @GitHub settings
   ```

1. Then follow the prompts to make your changes.

### Choosing a model

You can choose a model for the current conversation. Select a model in the picker and click **Submit**, or name the model in your request. The selection applies to the rest of that conversation and does not change other conversations or channel settings. The models available to you depend on your plan and your organization's policies. See [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison).

### Setting default repositories for a channel

You can set one or more default repositories for each private or public channel. All selected repositories must have the same owner. You cannot set default repositories for direct messages with Copilot.

When you do not specify repositories or branches, Copilot uses the channel's default repositories and their default branches.

1. In the channel, type `@GitHub settings` and send the message.
1. Follow the prompts to choose an account or organization and select the repositories.
1. Save your changes.

Channel defaults are shared by everyone using Copilot in the channel and apply to new conversations. Choosing repositories for a session doesn't change the channel defaults or subscribe the channel to notifications.

## Using MCP servers

MCP servers that are configured for a repository are available to Copilot when it works in that repository, so you configure them the same way as for Copilot cloud agent on GitHub. To use MCP servers in Teams, configure them in one of the repositories that Copilot works in.

Keep the following in mind when using MCP servers:

* Personal MCP servers that you configure in your own settings only apply when you own the session.
* A repository administrator configures the servers, allowed tools, and credentials.
* Review the tools and data access before enabling a server.
* If a session cannot start because the repository's MCP configuration is invalid or too large, ask a repository administrator to correct the configuration and try again.

To learn how MCP works with Copilot cloud agent, see [MCP And Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent). To set up MCP servers for a repository, including secrets and validation, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

## Using Copilot Memory

> [!NOTE]
> Copilot Memory is currently in public preview and subject to change.

Copilot Memory helps Copilot remember facts about your repositories and your preferences, so it can work more effectively over time. Repository facts apply only to that repository, and personal preferences apply to your own interactions. Copilot Memory is enabled by default for individual Copilot plans. For enterprise- and organization-managed plans, an administrator must enable the policy first. If Copilot Memory is enabled for you, Copilot stores memories automatically as it works on tasks you start, and applies them to later work.

For more information about Copilot Memory, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory). To review or delete your memories, see [Manage For Yourself](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

## Further reading

* [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)
* [Cloud Agent Access](https://docs.github.com/en/copilot/concepts/enterprise/cloud-agent-access)
