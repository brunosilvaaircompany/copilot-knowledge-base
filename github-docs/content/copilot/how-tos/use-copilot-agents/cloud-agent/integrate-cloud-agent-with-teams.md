# Integrating Copilot cloud agent with Teams

> [!NOTE]
> * This feature is currently in public preview and subject to change.
> * GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

The GitHub integration in Microsoft Teams allows you to interact with Copilot cloud agent all from within your Teams channels. From within a Teams thread you can initiate cloud agent sessions and open pull requests, using the context of your conversation.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention @GitHub in a Teams thread, the agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Teams account and be a member of a channel.

## Installing the GitHub app in Teams

The GitHub app only needs to be installed once in a team. After the app is installed, any member of the team can connect their GitHub account to the app and start using it.

1. Open the [GitHub integration installation link](https://teams.microsoft.com/l/app/836ecc9e-6dca-4696-a2e9-15e252cd3f31) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the GitHub app to your GitHub account

The first time you use the GitHub app in Teams, you need to connect it to your GitHub account and set a default repository. The default repository provides the context that Copilot uses when responding to prompts, and it’s also where pull requests created by Copilot cloud agent sessions will be opened unless you specify a repository in your prompt.

To get started, mention `@GitHub <YOUR_TASK>` in any Teams thread. The app will guide you through signing in and setting a default repository. Or you can connect your GitHub account and set the default repository manually by following these steps:

1. In Teams, mention the app in a thread by typing `@GitHub`.
1. Click **signin** from the list of suggestions.
1. Follow the prompts to sign in to your GitHub account.
1. In the thread, mention the app by typing `@GitHub`.
1. Click **settings** to set the default repository.

## Using the Copilot app in Teams

You can interact with the GitHub app in Teams by mentioning it in a thread. The agent will respond to your messages and perform tasks based on your requests. Only users with **write** access to the default repository—or the repository specified in their prompt—can trigger Copilot cloud agent to work. Contributors to the thread without **write** access can help guide Copilot by providing input to the conversation, which will be used as context when making changes in the pull request.

1. In Teams, mention the app in a thread by typing @GitHub.
1. Type your message or request, then send it. Optionally, you can specify a repository or branch using the following syntax:

    ```text
    @GitHub Add "Hello World" to the README in repo=REPO_OWNER/REPO_NAME branch=BRANCH_NAME
    ```

   The `repo` parameter tells Copilot cloud agent which repository to use for the request, and the `branch` parameter specifies an existing branch of the repository that should be used as the base branch for a pull request. By default, Copilot uses your configured default repository and the repository’s default branch.

   Copilot will initiate a cloud agent session and respond with a summary of the changes it plans to make, including a link to the pull request it has created in the repository.

You can continue to iterate on the pull request in the same Teams thread. Mention @GitHub with your suggested change, and the Copilot cloud agent will use all of the messages in the thread since the previous mention to iterate on the existing pull request.

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management)
