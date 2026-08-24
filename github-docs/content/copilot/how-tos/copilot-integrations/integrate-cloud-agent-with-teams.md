# Integrating Copilot cloud agent with Teams

> [!NOTE]
> * This feature is currently in public preview and subject to change.
> * GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

The GitHub integration in Microsoft Teams allows you to interact with Copilot cloud agent all from within your Teams conversations. Within Teams you can initiate cloud agent sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

Before you @mention GitHub in Teams, consider that Copilot cloud agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the GitHub app for Teams instead.

## Understanding collaborative sessions, permissions, and sandboxes

The identity Copilot uses depends on whether you interact with it in a direct message or a shared context.

* When you use Copilot in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked GitHub personal account to take these actions.

* When you use Copilot in a shared context, such as a group thread or channel, Copilot creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > Pull requests created in a shared context by Copilot use the app's identity. If you use repository rulesets, because these pull requests aren't attributed to a person, one more approval is required before merging, as long as the repository already requires at least one approval. This is enabled by default. See [Available Rules For Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#additional-approval-for-unattributed-copilot-pull-requests).


Only users with **write** access to a repository can trigger Copilot to make changes, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with Copilot in Teams.

Copilot uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

When you ask Copilot to perform a task, it will display details about the session, such as the working repository, issue or pull request link, model used, and a task status or summary.

### Secure cloud sandboxes

When Copilot cloud agent starts work on a task from Teams, Copilot continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready.

You can keep steering from Teams, or continue the work on the agent-generated artifacts in GitHub, the terminal, or your preferred code editor.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Teams account.
* You must have Microsoft Public Developer Preview enabled for your Microsoft Teams client, see [Public developer preview for Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/resources/dev-preview/developer-preview-intro) in the Microsoft Learn documentation.
* To use Copilot cloud agent, you must have cloud sandboxes enabled for your Copilot plan. See [Cloud sandboxing for GitHub Copilot](/copilot/concepts/about-cloud-and-local-sandboxes#cloud-sandboxing).

   > [!NOTE]
   > Cloud sandbox policies share the same configuration as Copilot cloud agent policies. Members of an organization or enterprise, including an enterprise with managed users may need their owner to enable cloud sandboxes and Copilot cloud agent before they can use Copilot in Teams. See [Enabling Or Disabling Cloud Sandboxes For Your Organization](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).


## Installing the GitHub app in Teams

The GitHub app only needs to be installed once in a team. After the app is installed, any member of the team can connect their GitHub account to the app and start using it.

1. Open the [GitHub integration installation link](https://teams.microsoft.com/l/app/836ecc9e-6dca-4696-a2e9-15e252cd3f31) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the GitHub app to your GitHub account

The first time you use the GitHub app in Teams, you need to connect it to your GitHub account. Then if prompted, set a default repository.

The default repository provides the context that Copilot uses when responding to prompts, and it's also where issues and pull requests created by Copilot cloud agent sessions will be opened unless you specify a repository in your prompt.

To get started:

1. In Teams, @mention the app in a message by typing `@GitHub`.
1. Follow the prompts to connect your GitHub account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@GitHub help`.

## Starting a GitHub Copilot session from your team conversation

@Mention the app in any Teams chat by typing `@GitHub` followed by your task. You can summon the agent for any repository where you have `write` access. The agent responds with a summary of planned changes and a link to the artifacts it creates.

For example, to ask the agent to create a pull request on a particular branch in a repository, you can type:

```text
@GitHub Create a pull request to...YOUR_PROMPT repo=OWNER/REPO_NAME branch=BRANCH_NAME
```

The `repo` parameter tells Copilot which repository to use, and the `branch` parameter specifies an existing branch to use as the base branch for a pull request.

## Iterating on work in the thread

To refine the pull request, @mention `@GitHub` in the same thread with your requested changes. Copilot incorporates all messages since the previous @mention to iterate on the work, keeping the discussion and implementation connected.

## Creating issues with Copilot

You can ask Copilot to create GitHub issues directly from Teams, turning conversations into actionable tasks. Just describe what you need in natural language, and Copilot creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

## Customizing Copilot cloud agent in Teams

You can customize how Copilot cloud agent works in your channels and threads using the `settings` parameter. For example, you can set a default repository for a channel.

1. To see and change your channel settings, mention the app in a message by typing:

   ```text
   @GitHub settings
   ```

1. Then follow the prompts to make your changes.

### Setting a default repository for a channel

You can set a default repository for each private or public channel. You cannot set a default repository for direct messages with Copilot.

If a channel does not have a default repository, Copilot sets the repository you use in your first session in that channel as the channel's default repository.

When you do not specify a repository or branch, Copilot uses the channel's default repository and that repository's default branch.

1. In the channel, type `@GitHub settings` and send the message.
1. Follow the prompts to select a default repository for the channel.

## Feedback and support

You can view and share feedback in our [discussion forum](https://github.com/orgs/community/discussions/205453).

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management)
