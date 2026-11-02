# Copilot automations

## Overview

With automations, you can set up Copilot cloud agent to run automatically, either on a schedule, in response to an event in a repository or triggered via the API. Automations can take action within the repository where they are configured, such as opening a pull request or labeling an issue.


You define your prompt once, select your triggers and decide what tools Copilot should be able to use. Copilot runs your automation automatically whenever the automation's trigger fires.

For example, you can use automations to:

* **Reproduce bugs**: Attempt to reproduce a reported bug when an issue is opened.
* **Capture screenshots for review**: Capture screenshots of changes and attach them to a pull request when it's marked as ready for review.
* **Investigate production incidents**: Start investigating an incident when your monitoring tool detects it.

You can also create and manage automations from:

* The **Agents** tab of a repository on GitHub
* The **Automations** tab in the GitHub Copilot app
* The **Agents** window in VS Code
* The REST API 

When you create an automation, you define:

* A **name** to identify the automation.
* A **type**, either personal or shared, which determines who can see and edit the automation, who is billed, and whose identity it uses. See [Personal and shared automations](#personal-and-shared-automations).
* A **prompt** describing the task you want Copilot to perform.
* **Triggers** that determine when the automation runs.
* The **tools** Copilot can use, which control what actions it can take in your repository.
* Optionally, the **model** and **reasoning level** Copilot uses.
* Optionally, **AI credits limits** that control how many AI credits the automation can consume.

You can add automations to automation groups which share context and can suggest improvements to themselves based on outcomes.

For instructions on creating and managing automations, see [Create Automations](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Availability and permissions

For automations to be available in a repository, all of the following must be true:

* The repository must be **private or internal**. Automations are not available in public repositories.
* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Cloud Agent Access](https://docs.github.com/en/copilot/concepts/enterprise/cloud-agent-access).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

Automations are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Max, GitHub Copilot Business, and GitHub Copilot Enterprise plans.


Any user with **write access** to a repository can create automations in that repository.

You can create and manage automations from:

* The **Agents** tab in a repository on GitHub, in the **Automations** pane.
* The **Automations** tab in the GitHub Copilot app.
* The **Automations** tab in the **Agents** window in VS Code.

Cloud automations in VS Code require version 1.144 or later and the `chat.automations.cloud.enabled` setting to be enabled.

## Personal and shared automations

When you create a automation, you choose its type, which you can’t change later.

* **Personal automations** are useful for automating work for yourself, such as preparing your updates for a standup.
* **Shared automations** let your team build and maintain automations together, to automate workflows for the whole team.

{% rowheaders %}

| | Personal | Shared |
|---|---|---|
| **Who can see the automation** | Only you | Everyone with read access to the repository |
| **Who can see the automation's runs** | Everyone with read access to the repository | Everyone with read access to the repository |
| **Who can edit the automation** | Only you | Everyone with write access to the repository |
| **Who is billed for AI credits** | You | The organization or user that owns the repository |
| **Identity used for actions on GitHub** | Your identity | Copilot's identity |

{% endrowheaders %}

Because a shared automation belongs to the repository rather than to the person who created it, it keeps working if that person leaves the team or loses access to the repository.

For a shared automation to run in an organization-owned repository, the organization must allow Copilot cloud agent usage billed to the organization. An administrator can enable this with the "Allow use of Copilot cloud agent billed to the organization" policy.

## Triggers

An automation runs when one of its triggers fires. A wide range of triggers are available, including:

* **On a schedule**: the automation runs at a recurring interval—hourly, daily, or weekly.
* **When an issue is created**: the automation runs each time an issue is opened in the repository.
* **When a pull request is opened**: the automation runs each time a pull request is opened in the repository.
* **When a pull request is synchronized**: the automation runs each time new commits are pushed to a pull request in the repository.

You can optionally configure filters for event-based triggers, for example:

* For when **an issue is created**, add a search query filter.
* For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

To reduce the risk of prompt injection, automations ignore GitHub events triggered by users who don't have write access to the repository by default. This helps prevent untrusted users from causing Copilot to take action, for example, when an external contributor opens an issue. You can opt in to allowing these events if you need to. For more information, see [Security and safety](#security-and-safety).

All automations can be triggered via the API, allowing you to connect automations to external systems and tools. When starting an automation via the API, you can include additional context which is passed into the prompt.

## Tools and actions

The **tools** you select when you create an automation determine what Copilot can do when the automation runs.

For example, you might allow Copilot to push changes, update issue labels, or create a pull request.

You can choose from two kinds of tools:

* **GitHub tools**, which let Copilot work with your repository on GitHub. For example, GitHub tools let Copilot:

  * Upload attachments
  * Hide and unhide comments and reviews
  * Add and remove reactions
  * Read discussions and their comments, and comment on discussions

* **Tools from MCP servers**, which let Copilot work with external systems. An automation can use tools from the MCP servers configured in the repository's MCP settings. You choose which of each server's tools the automation can use. See [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

Selecting tools is the main way you control the scope of an automation. Grant only the tools that the task needs, so that Copilot can't take actions you didn't intend.

You can manually select the tools you want to enable, or you can use the **Suggest tools** button on GitHub to have Copilot suggest tools based on your prompt.

GitHub tools can only take action in the single repository the automation is scoped to. Tools from MCP servers aren't limited to that repository: they can access whatever the server's configuration and credentials allow, which may include other repositories and external systems. Review what each MCP server can access before you select its tools.

## Configuration inherited from the repository

Automations use the Copilot cloud agent configuration for the repository they are scoped to, including:

* **Custom instructions**. See [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
* **Agent skills**. See [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **Firewall rules**. See [Customize The Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).
* **Secrets and variables**. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

Automations are stored separately from your repository's contents. They are not committed to Git, so they are not versioned alongside your code or managed through pull requests.

## Billing

Each time an automation runs, it starts a Copilot cloud agent session that uses GitHub AI Credits and GitHub Actions minutes.

For a personal automation, AI credits usage is billed to the user who created the automation.

For a shared automation, AI credits usage is billed to the organization that owns the repository, or to the repository owner's Copilot subscription if a personal account owns the repository. For more information, see [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses) and [GitHub Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions).

GitHub Actions minutes are billed separately to the repository owner.


### Controlling costs with AI credits limits

You can set limits on how many AI credits an automation can consume. This lets you automate recurring work while staying in control of your usage.

You can set the following optional limits, in AI credits. Leave a limit empty if you don't want to set it.

* **Per run**: Stops a run as soon as it reaches the limit. The minimum is 30 AI credits.
* **Daily**: Prevents new runs from starting once the limit is reached. Resets every day at 00:00 UTC.
* **Weekly**: Prevents new runs from starting once the limit is reached. Resets every Monday at 00:00 UTC.
* **Monthly**: Prevents new runs from starting once the limit is reached. Resets on the first day of each month at 00:00 UTC.

The daily, weekly, and monthly limits don't stop a run that is already in progress. To cap the cost of each individual run, set a per-run limit.


You can set limits when you create or update an automation. See [Create Automations](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Proposed improvements

Automations can propose improvements to their own tools, triggers, and prompts, and to those of other automations.

Automations may suggest improvements when they run into issues while working, such as missing tools.

When you create automations with Copilot, Copilot can help you to create self-improving automation groups where some automations do work and others evaluate outcomes, continuously proposing improvements.

When an automation has a proposed improvement, you'll receive a notification and will see the proposal when viewing the automation.

You will see a description of the proposed improvement and the changes to be applied to the automation group. You can decide whether to apply the proposed improvement or dismiss it.

## Security and safety

Automations run Copilot without a person initiating each task, so they carry some additional risks. GitHub provides built-in protections to help mitigate these risks.

* **Attribution.**
  * Actions taken on GitHub by a shared automation are attributed to Copilot. If your repository requires at least one pull request approval, an additional approval is required by default for pull requests created by a shared automation. Administrators can disable this extra requirement in rulesets, but not in branch protection rules.
  * Actions taken by a personal automation are attributed to the user who created the automation. As with pull requests that user creates themselves, they can't approve those pull requests, which preserves the expected review controls.
* **Least-privilege tools.** You choose exactly which tools an automation can use, so you can limit it to only the actions the task requires.
* **Untrusted input.** By default, automations ignore events triggered by users without write access to the repository, to reduce the risk of prompt injection from untrusted users.
* **Workflow runs.** By default, as with all Copilot cloud agent work, GitHub Actions workflows don't run on a pull request until a user with write access approves them. This mitigates the risk of a pull request opened by an automation triggering workflows automatically.
* **Transparent runs.** The Copilot cloud agent sessions started by any automation, personal or shared, are visible to everyone with read access to the repository. Anyone who can see these sessions can see the prompt, the session logs, and any pull requests or other changes Copilot creates.

For more information about how GitHub mitigates the risks of Copilot cloud agent, see [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Further reading

* [Create Automations](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations)
* [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)
* To learn how to store your automation as code, review it through pull requests, or run it with a different coding agent, see [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-github-agentic-workflows)
