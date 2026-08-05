# Integrating Copilot cloud agent with Slack

> [!NOTE]
> * This feature is in public preview and subject to change.
> * GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

## Introduction

The Copilot cloud agent integration in Slack allows you to interact with Copilot cloud agent from your Slack workspace and is included in the GitHub App for Slack. From within a Slack thread or direct message, you can initiate cloud agent sessions using the context of your conversation.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

When you @mention Copilot in Slack, consider the following.

* Copilot may perform write actions on your behalf, such as creating pull requests or issues, in addition to answering questions. Copilot uses the permissions of your linked GitHub account for any actions it takes.
* Copilot cloud agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request. If you want to limit the context, you can send a direct message to the GitHub App for Slack instead.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Slack account and be a member of a workspace.
* You must have the GitHub App for Slack installed. See [Integrate GitHub With Slack](https://docs.github.com/en/integrations/how-tos/slack/integrate-github-with-slack).

## Connecting the GitHub App to your GitHub account

The first time you use the GitHub App in Slack, the app will prompt you to connect it to your GitHub account and set a default repository. The default repository is where pull requests created by Copilot cloud agent sessions will be opened.

1. In Slack, open a direct message with the GitHub App or mention Copilot in a thread by typing `@GitHub Copilot`.
1. Send a prompt to Copilot cloud agent. This can be a request to perform a task, or simply `login`.
1. If asked to connect your GitHub account, follow the instructions in Copilot's reply and authorize the app to access your GitHub account.
1. In the Slack message thread, click **Configure settings** to set a default repository for pull requests. You can change this repository later using the `settings` command.
1. In the "Settings" dialog, type the name of a repository where you'll be using the cloud agent, then click **Save changes**.

## Using the GitHub App in Slack

You can send the GitHub App direct messages or mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to the default repository – or the repository specified in your prompt – in order to trigger Copilot cloud agent to work. If you do not have write access to the relevant repository, you can still help guide Copilot by providing input in the Slack thread, which will be used as context when Copilot cloud agent makes changes in the pull request.

Users can invoke Copilot cloud agent on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack GitHub App](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring GitHub Apps, see [Installing A GitHub App From GitHub Marketplace For Your Organizations](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the GitHub App or mention the app in a thread by typing `@GitHub`.
1. Type your prompt, then send it. You can describe the repository and branch in natural language as part of your request. For example:

    `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch`

    > [!NOTE] Tell Copilot cloud agent which repository to use for the request, and, if needed, an existing branch of the repository to use as the base branch for a pull request. If you don't specify a repository, Copilot uses the channel's default repository if one is set, and otherwise asks you which one to use. If you don't specify a branch, Copilot creates a new branch from the repository's default branch.

1. Copilot cloud agent will initiate a cloud agent session and, once the cloud agent has finished, respond with a summary of the changes it plans to make and a link to the pull request it has created in the default repository.

### Creating issues with Copilot

You can ask Copilot to create GitHub issues directly from Slack, turning conversations into actionable tasks. Just describe what you need in natural language, and Copilot creates the issue for you. You can create a single issue or multiple issues at once with child-parent relationships. When you mention Copilot, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

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

To avoid specifying a repository in every request, you can set a default repository for a Slack channel.

1. In the channel, type `@GitHub settings` and send the message.
1. Select the repository you want to use as the default, then save your changes.

When no repository is specified in a request, Copilot uses the channel's default repository.

> [!NOTE] The default repository is shared across the channel, so any change applies to everyone using Copilot in that channel.


## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) - Learn more about Copilot cloud agent and how it can support you.
