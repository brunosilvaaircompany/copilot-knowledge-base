# Agent management for enterprises

## Overview

The AI Controls view provides a centralized platform where you can manage and monitor AI policies and agents across your enterprise. From the "Agents" page, you can:
* Manage the enterprise-level availability of agents like Copilot cloud agent, Copilot code review, and Copilot custom agents
* Control who can manage your enterprise-level custom agents
* View and filter a list of agent sessions in your enterprise over the last 24 hours
* Find a detailed record of agentic audit log events

## Copilot cloud agent

Copilot policies are also managed at the enterprise level. If your enterprise owner has selected a specific policy, such as enabling a feature everywhere, disabling it everywhere, or enabling it for selected organizations only, you cannot override that setting at the organization level. For information on how policies combine, see [Policies](https://docs.github.com/en/copilot/concepts/policies).


Enterprise owners and AI managers can control how Copilot cloud agent is adopted across the enterprise by choosing one of four policy states. This allows you to pilot adoption progressively and manage risk.

If you choose the **Enabled for selected organizations** policy, you can select organizations individually or based on organization custom properties. This lets you define dynamic groups of organizations that align with your existing organizational structure—for example, by region, compliance tier, or department. You can manage this policy setting using the REST API endpoints or directly in the AI Controls page.  See [REST API endpoints for Copilot coding agent management](/rest/copilot/copilot-coding-agent-management#copilot-coding-agent-policy-states). Please note that using custom properties to enable CCA is evaluated once at the time of configuration. Organizations will not be automatically enabled or disabled for CCA if the custom property is added, removed, or modified later.

## Copilot custom agents

Copilot custom agents are specialized versions of Copilot cloud agent that you can configure with tailored prompts, tools, and context, making them excel at specific tasks. Custom agents can be defined and managed at the enterprise level for greater control and compliance, or at the organization and repository levels to allow teams the flexibility to build for their specific needs.

You can manage your enterprise-level custom agents:
* From the AI Controls view
* Using the REST API. See [Copilot Custom Agents](https://docs.github.com/en/rest/copilot/copilot-custom-agents).

For more detailed information on custom agents, see [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Agent sessions

An agent session encompasses an entire interaction with Copilot cloud agent, or any individual custom agent, on a specific task. These tasks include:

* Prompting the agent to create or edit a pull request
* Assigning the agent to an issue

Enterprise administrators can use AI Controls to view active and recent agent sessions, track audit log events, and search agentic activity in your enterprise using filters. See [Monitor Agentic Activity](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity) and [Agent Session Filters](https://docs.github.com/en/copilot/reference/agent-session-filters).

For long-term retention and analysis, you can stream enterprise audit log data to supported destinations. For more information, see [Streaming The Audit Log For Your Enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) and [Agentic Audit Log Events](https://docs.github.com/en/copilot/reference/agentic-audit-log-events).

For billing information on agent sessions, see [GitHub Copilot Premium Requests](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/github-copilot-premium-requests#usage-by-copilot-cloud-agent).

## Third-party agents

Third-party agents, or partner agents, such as Claude and Codex work alongside Copilot cloud agent to complete development tasks asynchronously on GitHub. While they share the same security protections and mitigations as Copilot cloud agent, their policies are managed separately. Disabling or restricting Copilot cloud agent does not automatically disable third-party agents, and vice versa. Each agent type must be configured independently.

Enterprise administrators and AI managers can control the availability of third-party agents from the Agents page in the AI Controls view. These policies govern third-party agent usage on GitHub.com.

For more information about available third-party agents, see [About Third Party Coding Agents](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents).

## Local agents

Agents running in Visual Studio Code are not managed through GitHub at all. Instead, they are an IDE feature with their own configuration.

For more information, see [Types of agents](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) and [Enable or disable the use of agents](https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents) in the Visual Studio Code documentation.

## MCP servers

Model Context Protocol (MCP) servers give agents access to external tools and data sources. Enterprise owners can control how MCP servers are discovered and used across the enterprise through a dedicated set of MCP policies in the AI Controls view.

To help you meet security and compliance requirements, you can choose to:
* Allow or block MCP server usage entirely
* Control which external tools are available to agents using an MCP registry (catalogs of approved MCP servers that your developers can discover and use)

Private MCP registries apply to Copilot CLI and IDEs, but not to cloud agents that run on GitHub. For Copilot cloud agent, MCP servers can be configured at the repository level or in custom agent profiles defined at the enterprise level.

For more information, see [MCP Management](https://docs.github.com/en/copilot/concepts/mcp-management).

## Enterprise-managed settings

The `managed-settings.json` file allows enterprises to control how users can interact with agents across Copilot clients. For example: which plugins can people install, and can people use "allow all" commands that let agents run commands without asking for permission? This file can be hosted on GitHub or installed directly on users' machines.

For more information, see [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).

## Agent mode in the IDE

Enterprise and organization owners can separately control whether their users have access to agent mode in IDE chat, independently from the "Chat in IDE" policy. This gives you finer-grained control over agentic capabilities in your developers' IDEs.
