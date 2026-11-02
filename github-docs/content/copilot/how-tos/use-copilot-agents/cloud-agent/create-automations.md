# Creating automations with Copilot cloud agent

## Introduction

With automations, you can set up Copilot cloud agent to run automatically, either on a schedule, in response to an event in a repository or triggered via the API. Automations can take action within the repository where they are configured, such as opening a pull request or labeling an issue.


You can create and manage automations from the **Agents** tab of a repository on GitHub.

You can also create and manage automations from:

* The **Automations** tab in the GitHub Copilot app
* The **Agents** window in VS Code
* The REST API

For an overview of automations, including triggers, tools, visibility, and security, see [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

## Prerequisites

For automations to be available in a repository, all of the following must be true:

* The repository must be **private or internal**. Automations are not available in public repositories.
* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Cloud Agent Access](https://docs.github.com/en/copilot/concepts/enterprise/cloud-agent-access).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

Automations are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Max, GitHub Copilot Business, and GitHub Copilot Enterprise plans.


### Enabling cloud automations in VS Code

To use cloud automations from VS Code, complete the repository prerequisites above, then:

1. Update to VS Code 1.144 or later.
1. In the Settings editor, enable `chat.automations.cloud.enabled`.
1. Open the **Agents** window, then select the **Automations** tab.

For creation and management instructions, see [Create and manage agent automations](https://code.visualstudio.com/docs/agents/run/automations) in the VS Code documentation.

## Creating an automation

> [!WARNING]
> The Copilot cloud agent sessions started by an automation are visible to others with access to the repository. Don't include secrets or other sensitive information in your prompt. To give Copilot access to sensitive values, use repository secrets. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

1. On GitHub, navigate to the main page of the repository.

1. Under your repository name, click **{% octicon "agent" aria-hidden="true" aria-label="agent" %} Agents**.
1. In the sidebar, click **Automations**.
1. Click **Create automation**.
1. Click **Create with agent** to work with Copilot to create your automations, or **Create manually** to set up automations with a form.

### Creating an automation with Copilot

After you click **Create with agent**, a chat window will appear and Copilot will ask what you want to automate.

You can work with Copilot to design your automation, setting up the triggers, tools and prompt.

Copilot can even help you create self-improving groups of automations which learn from outcomes and suggest improvements to themselves.

### Creating an automation manually

1. Enter a **name** for the automation.
1. Under **Type**, choose the kind of automation you want to create:

   * **Personal**: Only you can see the automation. AI credits are charged to you, and actions taken on GitHub use your identity.
   * **Shared**: Everyone with access to the repository can see the automation. AI credits are charged to the organization or user that owns the repository, and actions taken on GitHub use Copilot's identity.

   You can't change the type after you create the automation. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).
1. Select one or more **triggers** that determine when the automation runs. You can optionally configure filters for triggers to control when they fire.

   For issues and pull request triggers, you can choose:

   * **What resources on GitHub can be updated during the run**. From the **Configured tools can change** dropdown, choose **Anything in this repository** to let GitHub tools create and update any resource in the repository. Choose **Only this issue** to limit those tools' writes to the issue or pull request that triggered the run and any resources created during the run. This setting doesn't limit tools from MCP servers, which can access resources allowed by their server configuration and credentials. Depending on your repository configuration, the **Anything in this repository** option may not be available.
   * **Whether activity from Copilot in the cloud can trigger this automation**: From the **Can be triggered by** dropdown, pick **Anyone except Copilot in the cloud** to ignore events triggered by Copilot, including automations. Pick **Anyone** to listen for all events, including events triggered by Copilot.
   * **Whether users with only read access to the repository can trigger this automation**: By default, automations ignore activity from users who don't have write access to the repository. Uncheck the **Ignore events triggered by users without write access to this repository** box to listen for these events. Depending on your repository configuration, the **Ignore events triggered by users without write access to this repository** option may be locked in an enabled state.

1. In the **prompt** field, describe the task you want Copilot to perform each time the automation runs.

   For example, `Label this issue as a bug, an enhancement, or other, based on its content.`

1. Optionally, select the **model** and **reasoning level** you want Copilot to use. See [Changing The Ai Model](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Select the **tools** Copilot can use when the automation runs, such as pushing changes, updating issue labels, or creating a pull request.

    You can select GitHub tools, and tools from any MCP servers configured in the repository's MCP settings. To make an external system's tools available, a repository administrator must first configure its MCP server for the repository. See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

    Select only the tools the task requires. The tools you select control what actions Copilot can take in your repository. Optionally, you can use the **Suggest tools** button to ask Copilot to suggest tools based on your prompt. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#tools-and-actions).

1. Optionally, under **AI credit limits**, set limits on how many AI credits the automation can consume. See [Setting AI credits limits](#setting-ai-credits-limits).
1. Save the automation by clicking **Create automation**.

## Setting AI credits limits

Each time an automation runs, it consumes AI credits, which are billed to you for a personal automation, or to the repository owner for a shared automation. To control costs, you can set limits in the **AI credit limits** section when you create or edit an automation.

You can set the following optional limits, in AI credits. Leave a limit empty if you don't want to set it.

* **Per run**: Stops a run as soon as it reaches the limit. The minimum is 30 AI credits.
* **Daily**: Prevents new runs from starting once the limit is reached. Resets every day at 00:00 UTC.
* **Weekly**: Prevents new runs from starting once the limit is reached. Resets every Monday at 00:00 UTC.
* **Monthly**: Prevents new runs from starting once the limit is reached. Resets on the first day of each month at 00:00 UTC.

The daily, weekly, and monthly limits don't stop a run that is already in progress. To cap the cost of each individual run, set a per-run limit.


To remove a limit, edit the automation and clear the value.

## Testing an automation

You can run an automation immediately, without waiting for its trigger to fire, to check that it behaves as you expect.

1. Open the automation you want to test from the **Automations** pane.
1. Click the **Run** button.
1. From the **Trigger** dropdown, pick the trigger you want to simulate.
1. If you picked the **Manual** trigger, optionally enter **Context** which will be included in the agent's prompt. You can use this to simulate triggering the automation via the API.

   If you picked another trigger, fill in **Resource URL** with the relevant resource, for example the URL of the issue that was opened or the pull request comment that was created.
1. Click **Run now**.

   Copilot starts a Copilot cloud agent session and runs the automation's prompt with the tools you selected. You can open the session to follow its progress and review any changes it makes.

## Managing your Automations

Your personal automations are private to you. Shared automations are visible to everyone with read access to the repository, and anyone with write access can edit them.

The sessions started from any automation are visible to everyone with read access to the repository.

From the **Automations** pane in a repository, you can:

* View your personal automations and the repository's shared automations, the sessions they have started, and the AI credits they have consumed.
* Edit an automation to change its name, prompt, triggers, tools, model, reasoning effort or AI credits limits, and track the automation's revision history.
* Review proposed improvements to an automation's tools, triggers or prompt, proposed by the automation itself or other automations.
* Disable an automation to stop it running, or enable it again later.
* Delete an automation you no longer need.

To see all of your automations across every repository, and navigate to manage each one, use the Automations view at the user level.

## Further reading

* [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations)
* [Start Copilot Sessions](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
* [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
