# Managing Azure DevOps work with the GitHub Copilot app

> [!NOTE]
> The Azure DevOps integration in the GitHub Copilot app is in public preview and subject to change.


The Azure DevOps integration connects your repositories to the GitHub Copilot app. You can clone repositories, start agent sessions to create branches and make code changes, open pull requests, track their status in the sidebar, review changes, and land them with Agent Merge.

## Prerequisites

Before you begin, you need:

* The GitHub Copilot app, installed and signed in. See [Quickstart Copilot App](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app).
* A Microsoft account with access to the Azure DevOps organization, project, and repository you want to work with.

Cloud sessions aren't available for Azure DevOps repositories.

For Copilot Business and Copilot Enterprise users, your organization or enterprise administrator must keep the GitHub Copilot app policy enabled.

Azure DevOps permissions apply to every action you take through the integration. Connecting your account does not grant additional access to repositories or pull requests.

## Setting up the Azure DevOps integration

The Azure DevOps integration is disabled by default. Enable it in the app settings before connecting your account and adding a repository.

1. Open the app settings.
1. Click **Experimental**.
1. Enable **Azure DevOps integration**.
1. If you haven't already added your Microsoft account to the app, click **Accounts**. Click **Add account** and follow the prompts to sign in with the Microsoft account you use for Azure DevOps.

## Adding an Azure DevOps repository

To have an agent make code changes, add the repository to the app.

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}.
1. Click **Add Azure DevOps repository**.
1. Type your organization name, select a repository from the list, and follow the prompts to clone it.

You can then start an agent session in the repository, just as you would for a GitHub repository.

## Starting work with an agent

Start an agent session in your Azure DevOps repository and describe the coding task you want it to complete.

1. In the sidebar, next to **Sessions**, click {% octicon "plus" aria-label="New" %}, then select your connected Azure DevOps repository under "Start session in."
1. Describe the code changes you want the agent to make. The agent can create a branch, make code changes, commit them, and open a pull request.
1. Review the agent's changes and respond to any requests for approval.
1. After the agent creates the pull request, track its status in the sidebar. Click **View PR** to open it in the app and review its checks.

The agent's tools follow your session's tool permissions. Depending on your settings, actions such as creating a pull request or replying to and resolving review threads can run without another approval prompt. For more information, see [Agent Sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-tool-permissions).

## Reviewing and completing a pull request

Use the app's pull request view to inspect a pull request's changes, checks, and review feedback.

1. For a pull request created in your session, click **View PR**.
1. Review its changes and comments. To ask an agent to address a review comment, click **Fix** on the comment.
1. Review the agent's changes and its reply to the review thread.
1. When you are ready to approve the pull request, click **Approve**.
1. To merge the pull request, click **Complete**, review the confirmation, and confirm the merge.

Your Azure DevOps permissions and the repository's configured checks and policies determine whether you can approve or complete a pull request.

Approvals, reviewer changes, comments, edits, merges, and build actions are available in the pull request view.

You can also enable **Agent Merge** for a pull request to let an agent address review feedback, fix CI failures, resolve conflicts, and complete that pull request when Azure DevOps checks and policies pass. After you enable it for the pull request, the agent can complete it without a separate confirmation.

## Enterprise controls and activity records

The integration does not provide a setting to restrict it to selected repositories. Access to individual repositories and actions continues to be governed by Azure DevOps permissions.

The GitHub Copilot app does not provide a separate audit log for the integration. Actions appear in Azure DevOps under the signed-in user's name.

## Data shared with the agent

Azure DevOps content returned to the agent can enter the selected model's context. This can include private code, pull request descriptions and diffs, review comments, and excerpts from build logs.

Content that appears in chat or tool results is retained in local session history. Existing model restrictions, training settings, and enterprise policies continue to apply. For GitHub-provided models, data handling follows the Copilot terms and policies that apply to your plan. For models from another provider, review that provider's terms and data handling policies.

Signing out of your Microsoft account in the app removes the locally stored authentication tokens, but does not revoke access with Microsoft. To revoke access, use your Microsoft Entra account controls.

For guidance on using agents responsibly, see [Agents](https://docs.github.com/en/copilot/responsible-use/agents).
