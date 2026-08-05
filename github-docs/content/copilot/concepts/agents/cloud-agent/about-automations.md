# About Copilot automations

## Overview

With automations, you can set up Copilot cloud agent to run automatically, either on a schedule or in response to an event in a repository. Automations can take action within the repository where they are configured, such as opening a pull request or labeling an issue.


With a manually started Copilot cloud agent session, you give Copilot a task each time you want work done. With automations, you define a task once, and Copilot runs it automatically whenever the automation's trigger fires.

For example, you can use automations to:

* **Triage incoming issues**: automatically label new issues as a bug, an enhancement, or other, based on their content.
* **Fix failing tests nightly**: each night, check for failing tests on the `main` branch, attempt a fix, and open a draft pull request.
* **Prepare weekly release notes**: draft release notes and open a pull request on a schedule.

When you create an automation, you define:

* A **name** to identify the automation.
* A **prompt** describing the task you want Copilot to perform.
* One or more **triggers** that determine when the automation runs.
* The **model** Copilot uses.
* The **tools** Copilot can use, which control what actions it can take in your repository.

For instructions on creating and managing automations, see [Create Automations](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Availability and permissions

For automations to be available in a repository, all of the following must be true:

* The repository must be **private or internal**. Automations are not available in public repositories.
* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

Automations are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Max, GitHub Copilot Business, and GitHub Copilot Enterprise plans.


Any user with **write access** to a repository can create automations in that repository.

You can create and manage automations from:

* The **Agents** tab in a repository on GitHub, in the **Automations** pane.
* The **Automations** tab in the GitHub Copilot app.

## Triggers

An automation runs when one of its triggers fires. The following triggers are available:

* **On a schedule**: the automation runs at a recurring interval—hourly, daily, or weekly.
* **When an issue is created**: the automation runs each time an issue is opened in the repository.
* **When a pull request is opened**: the automation runs each time a pull request is opened in the repository.
* **When a pull request is synchronized**: the automation runs each time new commits are pushed to a pull request in the repository.

You can optionally configure filters for event-based triggers:

* For when **an issue is created**, add a search query filter.
* For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

To reduce the risk of prompt injection, automations ignore events triggered by users who don't have write access to the repository by default. This helps prevent untrusted users—for example, an external contributor opening an issue—from causing Copilot to take action. You can opt in to allowing these events if you need to. For more information, see [Security and safety](#security-and-safety).

## Tools and actions

The **tools** you select when you create an automation determine what Copilot can do when the automation runs.

For example, you might allow Copilot to push changes, update issue labels, or create a pull request.

Selecting tools is the main way you control the scope of an automation. Grant only the tools that the task needs, so that Copilot can't take actions you didn't intend.

You can manually select the tools you want to enable, or you can use the **Suggest tools** button to have Copilot suggest tools based on your prompt.

An automation can only take action in the single repository it is scoped to.

When an automation changes an issue, it can explain each change and rate its confidence, applying high-confidence changes automatically and proposing others for your review. See [About Automation Rationale And Approvals](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automation-rationale-and-approvals).

## Configuration inherited from the repository

Automations use the Copilot cloud agent configuration for the repository they are scoped to, including:

* **Custom instructions**. See [Add Repository Instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
* **Agent skills**. See [Add Skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **Firewall rules**. See [Customize The Agent Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-firewall).
* **Secrets and variables**. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

Automations are stored separately from your repository's contents. They are not committed to Git, so they are not versioned alongside your code or managed through pull requests.

## Visibility

An automation is **private to the user who created it**. Other people, including repository administrators, can't see your automations.

However, the Copilot cloud agent **sessions** that an automation starts are visible to other people with access to the repository, just like any other Copilot cloud agent session. Anyone who can see these sessions can see the prompt, the session logs, and any pull requests or other changes Copilot creates.

Because sessions and their logs are visible to others, you should not include secrets or other sensitive information directly in an automation's prompt. To give Copilot access to sensitive values, use repository secrets instead. See [Configure Secrets And Variables](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

## Billing

Each time an automation runs, it starts a Copilot cloud agent session that uses GitHub Actions minutes and GitHub AI Credits. This usage is billed to the user who created the automation. For more information, see [GitHub Copilot Licenses](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses).


## Security and safety

Automations run Copilot without a person initiating each task, so they carry some additional risks. GitHub provides built-in protections to help mitigate these risks.

* **Attribution.** Pull requests opened and code pushed by an automation are attributed to the user who created the automation. As with pull requests that user creates themselves, they can't approve those pull requests, which preserves the expected review controls.
* **Least-privilege tools.** You choose exactly which tools an automation can use, so you can limit it to only the actions the task requires.
* **Untrusted input.** By default, automations ignore events triggered by users without write access to the repository, to reduce the risk of prompt injection from untrusted users.
* **Workflow runs.** As with all Copilot cloud agent work, GitHub Actions workflows don't run on a pull request until a user with write access approves them. This mitigates the risk of a pull request opened by an automation triggering workflows automatically.

For more information about how GitHub mitigates the risks of Copilot cloud agent, see [Risks And Mitigations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Further reading

* [Create Automations](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations)
* [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
