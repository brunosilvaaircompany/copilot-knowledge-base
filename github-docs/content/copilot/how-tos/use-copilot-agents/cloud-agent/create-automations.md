# Creating automations with Copilot cloud agent

## Introduction

With automations, you can set up Copilot cloud agent to run automatically, either on a schedule or in response to an event in a repository. Automations can take action within the repository where they are configured, such as opening a pull request or labeling an issue.


You can create and manage automations from the **Agents** tab of a repository on GitHub. You can also create and manage automations from the **Automations** tab in the GitHub Copilot app.

For an overview of automations, including triggers, tools, visibility, and security, see [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).

## Prerequisites

For automations to be available in a repository, all of the following must be true:

* The repository must be **private or internal**. Automations are not available in public repositories.
* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

Automations are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Max, GitHub Copilot Business, and GitHub Copilot Enterprise plans.


## Creating an automation

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "agent" aria-hidden="true" aria-label="agent" %} Agents**.
1. In the sidebar, click **Automations**.
1. Click **Create new**.
1. Enter a **name** for the automation.
1. Select one or more **triggers** that determine when the automation runs:

   * **On a schedule**: choose a recurring interval, either hourly, daily, or weekly.
   * **When an issue is created**: the automation runs each time an issue is opened in the repository.
   * **When a pull request is opened**: the automation runs each time a pull request is opened in the repository.
   * **When a pull request is synchronized**: the automation runs each time new commits are pushed to a pull request in the repository.

   You can optionally configure filters for issue and pull request triggers:

   * For when **an issue is created**, add a search query filter.
   * For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

1. In the **prompt** field, describe the task you want Copilot to perform each time the automation runs.

   For example, `Label this issue as a bug, an enhancement, or other, based on its content.`

   > [!WARNING]
   > The Copilot cloud agent sessions started by an automation are visible to others with access to the repository. Don't include secrets or other sensitive information in your prompt. To give Copilot access to sensitive values, use repository secrets. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

1. Optionally, select the **model** you want Copilot to use. See [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Select the **tools** Copilot can use when the automation runs, such as pushing changes, updating issue labels, or creating a pull request.

    Select only the tools the task requires. The tools you select control what actions Copilot can take in your repository. Optionally, you can use the **Suggest tools** button to ask Copilot to suggest tools based on your prompt. See [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations#tools-and-actions).

1. Save the automation by clicking **Create automation**.

## Testing an automation

You can run an automation immediately, without waiting for its trigger to fire, to check that it behaves as you expect.

1. Open the automation you want to test from the **Automations** pane.
1. Click the **Run now** button.
   Copilot starts a Copilot cloud agent session and runs the automation's prompt with the tools you selected. You can open the session to follow its progress and review any changes it makes.

## Managing your Automations

Your automations are private to you, but the sessions started from your automations will be visible to everyone with read access to the repository.

From the **Automations** pane in a repository, you can:

* View your automations for the repository and the sessions they have started.
* Edit an automation to change its name, prompt, triggers, tools, or model.
* Disable an automation to stop it running, or enable it again later.
* Delete an automation you no longer need.

To see all of your automations across every repository, and navigate to manage each one, use the Automations view at the user level.

## Further reading

* [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations)
* [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
* [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
