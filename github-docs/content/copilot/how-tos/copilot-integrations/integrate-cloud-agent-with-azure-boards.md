# Integrating Copilot cloud agent with Azure Boards

The Azure Boards GitHub integration allows you to invoke Copilot cloud agent without leaving your workspace. From within a Azure Boards work item you can initiate cloud agent sessions and open pull requests, using the context of your work item description and comments.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> * GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).
> * When you send a work item to Copilot cloud agent, the agent will capture content from text fields (such as the description and reproduction steps), along with the last 50 comments. This context is stored in the pull request, and is visible to anyone with access to the repository.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* The repositories connected to the Azure DevOps project must have Copilot cloud agent enabled.

## Installing the Azure Boards application on GitHub

> [!NOTE]
> To install the Azure Boards application, you must be an owner or App manager of the organization or enterprise on GitHub.

The Azure Boards app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their GitHub account to the app and start using it.

1. Go to the [Azure Boards installation page](https://github.com/marketplace/azure-boards).
1. Scroll to the bottom of the page, then use the **Account** dropdown menu to select an account you would like to install the app in.
1. Click **Install**.
1. Select the repositories you would like the Azure Boards app to have access to.
1. Follow the prompts on screen to configure and authorize the app in your Azure DevOps organization and project.

## Approving the Azure Boards application permissions

If you already have the Azure Boards application installed on GitHub, you will need to approve the required permission changes to allow the app to communicate with GitHub Copilot.

1. Navigate to [your installed GitHub Apps](https://github.com/settings/installations).
1. Find the Azure Boards application, then click the **Review request** link.
1. Review the permissions, then click **Accept new permission**.

## Creating a pull request from a work item

1. In Azure Boards, open the work item you want to send to Copilot cloud agent.
1. Click the {% octicon "copilot" aria-label="Copilot" %} icon on the work item.
1. Select **Create a pull request with Copilot**.
1. Under **GitHub repository**, select the repository where Copilot should create the pull request.
1. Optionally, change the base branch that Copilot should use for the pull request.
1. Optionally, add any additional instructions to provide Copilot with more context.
1. Click **Create**.

Copilot cloud agent will begin processing the work item and create a draft pull request linked back to the work item.

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management)
