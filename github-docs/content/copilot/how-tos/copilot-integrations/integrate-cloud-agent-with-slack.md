# Integrating Copilot cloud agent with Slack

> [!NOTE]
> * This feature is in public preview and subject to change.
> * GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

## Introduction

The Copilot cloud agent integration in Slack allows you to interact with Copilot cloud agent from your Slack workspace and is included in the GitHub app for Slack. Within a Slack message, thread, or direct message, you can initiate cloud agent sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

Before you @mention GitHub in Slack, consider that Copilot cloud agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the GitHub app for Slack instead.

## Understanding collaborative sessions, permissions, code channels and sandboxes

The identity Copilot uses depends on whether you interact with it in a direct message or a shared context.

* When you use Copilot in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked GitHub personal account to take these actions.

* When you use Copilot in a shared context, such as a group thread or channel, Copilot creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > Pull requests created in a shared context by Copilot use the app's identity. If you use repository rulesets, because these pull requests aren't attributed to a person, one more approval is required before merging, as long as the repository already requires at least one approval. This is enabled by default. See [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#additional-approval-for-unattributed-copilot-pull-requests).


Only users with **write** access to a repository can trigger Copilot to make changes, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with Copilot in Slack.

Copilot uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

### Slack Code

When you ask Copilot to perform a task, Copilot cloud agent will create a dedicated code channel, called **Slack Code**. This is where you, and optionally your teammates, can collaborate with Copilot on a task. Once a code channel is established, steer the session exclusively through that channel.

Copilot manages the code channel and displays details about the session, such as the working repository, branch, issue or pull request link, status, and model in use. Code channels are intended for one session at a time: one channel per task. When the session is finished, you are asked whether you want to archive the channel. After archiving, the channel and its history remain viewable and searchable, and you can reopen the channel if needed.

### Secure cloud sandboxes

When Copilot cloud agent starts work on a task from Slack, Copilot continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready. You can keep steering from Slack or continue the work on the agent-generated artifacts in GitHub, the terminal, or your preferred code editor.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Slack account and be a member of a workspace.
* You must have the GitHub integration for Slack installed. See [Integrate GitHub With Slack](https://docs.github.com/en/integrations/how-tos/slack/integrate-github-with-slack).
* To use Copilot cloud agent, you must have cloud sandboxes enabled for your Copilot plan. See [Cloud sandboxing for GitHub Copilot](/copilot/concepts/about-cloud-and-local-sandboxes#cloud-sandboxing).

   > [!NOTE]
   > Cloud sandbox policies share the same configuration as Copilot cloud agent policies. Members of an organization or enterprise, including an enterprise with managed users may need their owner to enable cloud sandboxes and Copilot cloud agent before they can use Copilot in Slack. See [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).


## Connecting the GitHub app to your GitHub account

The first time you use the GitHub integration in Slack, the app will prompt you to connect it to your GitHub account. Then if prompted, set a default repository.

The default repository provides the context that Copilot uses when responding to prompts, and it's also where issues and pull requests created by Copilot cloud agent sessions will be opened unless you specify a repository in your prompt.

To get started:

1. In Slack, open a direct message with the GitHub app or @mention the GitHub app in a thread by typing `@GitHub`.
1. Follow the prompts to connect your GitHub account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@GitHub help`.

## Using the GitHub app in Slack

You can send the GitHub app direct messages or @mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to the default repository, or the repository specified in your prompt, in order to trigger Copilot cloud agent to work. If you do not have write access to the relevant repository, you can still help guide Copilot by providing input in the Slack thread, which will be used as context when Copilot cloud agent makes changes in the pull request.

Users can invoke Copilot cloud agent on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack GitHub app](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring GitHub Apps, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the GitHub app or @mention the app in a thread by typing `@GitHub`.
1. Type your prompt, then send it. You can describe the repository and branch in natural language as part of your request. For example:

    `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch`

1. Copilot cloud agent will initiate a cloud agent session and, once the cloud agent has finished, respond with a summary of the changes it plans to make and a link to the artifacts it has created in the specified repository.

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

### Setting a default repository for a channel

You can set a default repository for each private or public channel. You cannot set a default repository for direct messages with Copilot.

If a channel does not have a default repository, Copilot sets the repository you use in your first session in that channel as the channel's default repository.

1. In the channel, type `@GitHub settings` and send the message.
1. Select the repository you want to use as the default, then save your changes.

When you do not specify a repository or branch, Copilot uses the channel's default repository and that repository's default branch.

> [!NOTE] The default repository is shared across the channel, so any change applies to everyone using Copilot in that channel.

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) - Learn more about Copilot cloud agent and how it can support you.
