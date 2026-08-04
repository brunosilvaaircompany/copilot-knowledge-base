# Managing access to GitHub Copilot cloud agent

> [!NOTE]
> For an introduction to Copilot cloud agent, see [About Cloud Agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Overview

Copilot cloud agent is an AI-powered software development agent that can work autonomously on issues or developer requests. It raises draft pull requests to propose a fix and iterates on the changes in response to feedback.


If you are a GitHub Copilot Enterprise or GitHub Copilot Business subscriber, Copilot cloud agent is disabled by default and must be enabled by an administrator before it is available for use.

If you are a Copilot Pro, Copilot Pro+, or Copilot Max subscriber, Copilot cloud agent is enabled by default.

Once enabled, you can use Copilot cloud agent in any repository, provided that an administrator hasn't opted the repository out.

## Copilot cloud agent policies for Copilot Business and Copilot Enterprise

For GitHub Copilot Business and GitHub Copilot Enterprise subscribers, the ability to use Copilot cloud agent is controlled by policy settings defined at the organization level. See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

If the organization is owned by an enterprise, enablement may be controlled at the enterprise level. See [Enable Copilot Cloud Agent](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent).


## Opting repositories out of Copilot cloud agent

By default, users with Copilot cloud agent enabled can use it in all repositories.

Enterprise administrators and organization owners (for organization-owned repositories) and users (for user-owned repositories) can opt out repositories and prevent Copilot cloud agent from being used in those repositories.

For information on disabling Copilot cloud agent in some or all repositories owned by an organization, see [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

For information on disabling Copilot cloud agent in all repositories owned by an enterprise, see [Block Agentic Features](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/block-agentic-features).

For information on disabling Copilot cloud agent in repositories owned by your personal user account, see [Manage Policies](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#disabling-or-enabling-copilot-cloud-agent-in-your-repositories).

## Managing access to Automations

Automations let users run Copilot cloud agent automatically, on a schedule or in response to events. See [About Automations](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations).

For automations to be available in a repository, all of the following must be true:

* The repository must be **private or internal**. Automations are not available in public repositories.
* Copilot cloud agent must be enabled for the repository. If you have Copilot Business or Copilot Enterprise, an administrator must enable the Copilot cloud agent policy. See [Access Management](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management).
* The organization must allow both Copilot cloud agent and automations in the repository (both are enabled by default). See [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

Automations are available with the GitHub Copilot Pro, GitHub Copilot Pro+, GitHub Copilot Max, GitHub Copilot Business, and GitHub Copilot Enterprise plans.


In addition to the Copilot cloud agent policy, organizations can control whether automations are allowed in a repository. Automations are enabled by default in repositories where Copilot cloud agent is enabled. For more information, see [Add Copilot Cloud Agent](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

## Further reading

* [Cloud Agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent)
* [Customize The Agent Environment](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
* [Customize The Agent Firewall](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-firewall)
* [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers)
* [Pilot Cloud Agent](https://docs.github.com/en/copilot/tutorials/cloud-agent/pilot-cloud-agent)
