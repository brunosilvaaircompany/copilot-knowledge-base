# Integrating Copilot cloud agent with Linear

> [!NOTE]
> GitHub Copilot uses AI. Check for mistakes. See [Agents](https://docs.github.com/en/copilot/responsible-use/agents).

The Copilot integration in Linear allows you to invoke Copilot cloud agent without leaving your Linear workspace. From within a Linear issue you can initiate cloud agent sessions, customize which model, custom agent, or branches the agent uses, steer a session, and open pull requests, all using the context of your issue description and comments.

For information about additional Copilot integrations, see [About Copilot Integrations](https://docs.github.com/en/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention @GitHub in, or assign Copilot to, a Linear issue, the agent captures the entire issue description and comments as context for your request. This helps the agent to understand the issue and implement an appropriate solution, based on all of the information in the issue. This context is stored in the pull request.

## Prerequisites

* You must have a GitHub account with access to Copilot through a paid Copilot plan.
* You must have a Linear account and be a member of a team.

## Installing the Copilot app in Linear

> [!NOTE]
> * To install the Copilot app in Linear, you must be an owner of the organization or enterprise where you want to install the app. You must also be a workspace administrator in Linear.
> * If your organization is part of an enterprise that uses GitHub Enterprise Cloud with data residency, install the integration from the list of apps available to your enterprise at `SUBDOMAIN.ghe.com/apps/external-app/github-copilot-for-linear`. Replace SUBDOMAIN with your enterprise's subdomain of GHE.com.

The Copilot app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their Copilot account to the app and start using it.

1. Go to the [Copilot for Linear page](https://github.com/apps/github-copilot-for-linear?ref_product=copilot&ref_type=engagement&ref_style=text) and click **Configure**.
1. Follow the prompts on screen to configure and authorize the app in the organization or enterprise where you want to use it.

## Using the Copilot app in Linear

The first time you use the Copilot app in Linear, you must connect it to your GitHub account. You must also specify a repository for Copilot cloud agent to use. Only users with **write** access to the specified repository can trigger Copilot cloud agent to work in that repository. Contributors to the issue without repository **write** access can help guide Copilot by providing input to the issue conversation, which is used as context when creating the pull request.

1. In Linear, create an issue where you want to use Copilot cloud agent.
1. Click the **Assign** dropdown, then select **GitHub Copilot**.
1. If you haven't yet specified a repository for Copilot cloud agent to use, you are prompted to do so now. This is where Copilot cloud agent opens the pull request related to this issue.
1. If this is your first time using the app, you are prompted to sign in to your GitHub account and authorize the app. Follow the prompts to complete the authorization.
1. In the "Links" section of your Linear issue, you will see a linked "[WIP]" pull request created by Copilot cloud agent. Click the link to view the pull request on GitHub.
1. Once Copilot cloud agent has finished working on the pull request, a notification is added to the "Activity" section of your Linear issue.

## Customizing Copilot cloud agent in Linear

You can customize how Copilot cloud agent runs in Linear, either per issue or across your entire workspace by using Linear's agent guidance. Recurring preferences such as a default repository, a preferred model, or branch conventions are best set once with [Linear agent guidance](#using-linear-agent-guidance).

### Using Linear agent guidance

Linear's agent guidance is a prompt that you set at the workspace or team level. Linear automatically passes this guidance to Copilot cloud agent every time you trigger it.

Common uses for agent guidance include:

* Specifying a default repository to open pull requests against.
* Specifying a preferred model.
* Specifying a custom agent to use.
* Defining branch-naming conventions or a default base branch.

For more information about Linear's agent guidance, see [Guiding agents](https://linear.app/docs/agents-in-linear#guiding-agents) in the Linear documentation.

### Choosing a model

When you trigger Copilot cloud agent from a Linear issue you can choose which model Copilot uses by specifying the model in the issue description. For more information, see [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

To set a default model for every run in your workspace or team, add it to your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Using a custom agent

You can have Copilot cloud agent use a custom agent from your GitHub repository when it opens a pull request from Linear by specifying which agent to use in the issue description. For more information, see [Create Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

To always use the same custom agent across your workspace or team, specify it in your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Setting the base branch and working branch

When Copilot cloud agent opens a pull request from a Linear issue, you can choose:

* The **base branch** the pull request targets.
* The **working branch** name Copilot cloud agent uses for its commits.

To apply the same base branch or branch-naming convention across every run, add it to your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Steering a session

After you trigger Copilot cloud agent from a Linear issue, you can continue to direct the agent. To do this, mention `@GitHub Copilot` in a comment on the Linear issue with additional instructions, or input additional instructions in the agent chat panel.

## Further reading

* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management)
