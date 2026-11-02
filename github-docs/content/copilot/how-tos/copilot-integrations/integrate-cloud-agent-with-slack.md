# Integrating Copilot cloud agent with Slack

> [!NOTE]
> GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

## Introduction

The Copilot cloud agent integration in Slack allows you to interact with Copilot cloud agent from your Slack workspace and is included in the GitHub app for Slack. Within a Slack message, thread, or direct message, you can initiate cloud agent sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. You can also choose the model, connect Model Context Protocol (MCP) servers, work across multiple repositories, and utilize Copilot Memory. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/about-copilot-integrations).

## Security considerations

Before you @mention GitHub in Slack, consider that Copilot cloud agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the GitHub app for Slack instead.

## Understanding collaborative sessions, permissions, code channels, and sandboxes

The identity Copilot uses depends on whether you interact with it in a direct message or a shared context.

* When you use Copilot in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked GitHub personal account to take these actions.

* When you use Copilot in a shared context, such as a group thread or channel, Copilot creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > Pull requests created in a shared context by Copilot use the app's identity. If you use repository rulesets, because these pull requests aren't attributed to a person, one more approval is required before merging, as long as the repository already requires at least one approval. This is enabled by default. See [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#additional-approval-for-unattributed-copilot-pull-requests).


Only users with **write** access to every repository selected for a session can trigger Copilot to make changes or steer that session, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with Copilot in Slack.

Copilot uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

### Slack Code

When you ask Copilot to perform a task, Copilot cloud agent will create a dedicated code channel, called **Slack Code**. This is where you, and optionally your teammates, can collaborate with Copilot on a task. Once a code channel is established, steer the session exclusively through that channel.

Copilot manages the code channel and displays details about the session, such as the working repositories, branches, issue or pull request links, status, and model in use. Code channels are intended for one session at a time: one channel per task. When the session is finished, you are asked whether you want to archive the channel. After archiving, the channel and its history remain viewable and searchable, and you can reopen the channel if needed.

### Secure cloud sandboxes

When Copilot cloud agent starts work on a task from Slack, Copilot continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready. You can keep steering from Slack or continue the work on the agent-generated artifacts in GitHub, the terminal, or your preferred code editor.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Slack account and be a member of a workspace.
* You must have the GitHub integration for Slack installed. See [Integrate GitHub With Slack](https://docs.github.com/en/integrations/how-tos/slack/integrate-github-with-slack).
* If you get Copilot through an organization or enterprise, including an enterprise with managed users, the **Copilot in the cloud** policy is enabled by default, but an owner can turn it off. Copilot runs your Slack sessions in a cloud sandbox, which doesn't need a separate setting. See [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).



## Connecting the GitHub app to your GitHub account

The first time you use the GitHub integration in Slack, the app will prompt you to connect it to your GitHub account. Then if prompted, set a default repository.

The default repository provides the context that Copilot uses when responding to prompts, and it's also where issues and pull requests created by Copilot cloud agent sessions will be opened unless you specify a repository in your prompt. You cannot set default repositories for direct messages, so in a direct message, name the repositories in your prompt.

To get started:

1. In Slack, open a direct message with the GitHub app or @mention the GitHub app in a thread by typing `@GitHub`.
1. Follow the prompts to connect your GitHub account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@GitHub help`.

## Using the GitHub app in Slack

You can send the GitHub app direct messages or @mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to every default repository, or every repository specified in your prompt, in order to trigger Copilot cloud agent to work. If you do not have write access to the relevant repositories, you can still help guide Copilot by providing input in the Slack thread, which will be used as context when Copilot cloud agent makes changes in the pull request.

Users can invoke Copilot cloud agent on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack GitHub app](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring GitHub Apps, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the GitHub app or @mention the app in a thread by typing `@GitHub`.
1. Type your prompt, then send it. You can describe the repository and branch in natural language as part of your request. For example:

    `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch`

1. Copilot cloud agent will initiate a cloud agent session and, once the cloud agent has finished, respond with a summary of the changes it plans to make and a link to the artifacts it has created in the specified repository.

You can also reply to a GitHub notification and mention `@GitHub` with a task. For example, ask it to investigate a failed workflow or explain the changes in a pull request. The conversation and linked GitHub resources provide context for the work.

### Working across multiple repositories

A session can work with up to 11 repositories owned by the same organization or personal account. You must have write access to every selected repository. Select the repositories when you start the task, or name them in your prompt. For example:

```text
@GitHub Update the API in octo-org/service and its client in octo-org/web. Open a pull request in each repository and link the changes.
```

Review the repository set before work begins. Changing channel defaults affects new conversations, not the repositories of a running session.

### Creating issues with Copilot

You can ask Copilot to create GitHub issues directly from Slack, turning conversations into actionable tasks. Just describe what you need in natural language, and Copilot creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

1. In Slack, ask Copilot to create one or more issues, specifying the target repository.

   To create a single issue:

   ```text
   @GitHub In octo-org/octo-repo, create a feature request to add fuzzy matching to search.
   ```

   To create multiple issues at once:

   ```text
   @GitHub In octo-org/octo-repo, open separate issues for adding fuzzy matching to search, paginating the results list, and caching search queries.
   ```

   To create issues with child-parent relationships:

   ```text
   @GitHub In octo-org/octo-repo, create an epic to redesign search, with child issues for fuzzy matching, pagination, and query caching.
   ```

   > [!NOTE] You can only use Copilot to create issues in repositories where you already have permission to create issues. This feature doesn't change your access or bypass repository permissions.

1. Copilot creates the issues and replies with a link to each one. Each issue includes a title and description, and based on your prompt Copilot can also add metadata such as labels, assignees, and issue type.

### Setting default repositories for a channel

You can set one or more default repositories for each Slack channel. Default repositories give Copilot context for your prompts, so you don't need to specify a repository each time you ask it to work. The repositories you can select depend on the default owner for the channel. You cannot set default repositories for direct messages with Copilot.

If a channel does not have any default repositories, Copilot sets the repository you use in your first session in that channel as its default.

> [!NOTE]
> The default repositories and other channel settings are shared across the channel, so any change applies to everyone using Copilot in that channel.

1. In the channel, run `@GitHub settings`.
1. If necessary, use **Select owner** or **Edit owner** to choose the account or organization.
1. Use **Select repos**, or the **Edit repositories** option for an existing selection, to choose the repositories.
1. Save your changes. The first repository is marked as the primary repository.

When you do not specify a repository or branch, Copilot uses the channel's default repositories and their default branches. You can clear the default repositories so that new conversations ask which repositories to use. Specifying repositories in a conversation does not change the channel defaults or subscribe the channel to repository notifications.

### Choosing a model

You can choose the model that Copilot cloud agent uses for sessions started in Slack. To change the model for only the current conversation, ask Copilot to choose a model. This changes the model for the conversation, including its code channel, without changing the channel defaults.

To set a default model for new conversations in a channel:

1. Run `@github settings` in the channel.
1. Click **Edit model**.
1. Select a model, then save your changes.

If you clear the channel's model setting, new conversations use the standard default model. Model choices depend on availability and your organization's policies. For more information about models, see [Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison).

### Using MCP servers

MCP servers that are configured for a repository are available to Copilot when it works in that repository, so you configure them the same way as for Copilot cloud agent on GitHub. To use MCP servers in Slack, configure them in one of the default repositories that Copilot works in.

Keep the following in mind when using MCP servers:

* MCP servers that you configure in your own settings are used only for sessions that you start.
* A repository administrator configures the servers, allowed tools, and credentials.
* Review the tools and data access before enabling a server.
* If a session cannot start because the repository's MCP configuration is invalid or too large, ask a repository administrator to correct the configuration and try again.

To learn how MCP works with Copilot cloud agent, see [MCP And Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent). To set up MCP servers for a repository, including secrets and validation, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### Using Copilot Memory

> [!NOTE]
> Copilot Memory is currently in public preview and subject to change.

Copilot Memory helps Copilot remember facts about your repositories and your preferences, so it can work more effectively over time. Copilot Memory is enabled by default for individual Copilot plans. For enterprise- and organization-managed plans, an administrator must enable the policy first. If Copilot Memory is enabled for you, Copilot stores memories automatically as it works on tasks you start, and applies them to later work.

Repository facts apply only to the repository they were learned in, and personal preferences apply only to your own interactions. You can review and delete memories in your settings. For more information, see [Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory).

## Further reading

* [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github) - Learn more about Copilot cloud agent and how it can support you.
