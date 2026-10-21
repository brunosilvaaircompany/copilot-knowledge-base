# Model Context Protocol (MCP)

## Overview of Model Context Protocol (MCP)

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.


You can use MCP to extend the capabilities of GitHub Copilot by integrating it with a wide range of existing tools and services. MCP works across all major Copilot surfaces—whether you're working in an IDE, using GitHub Copilot CLI, working in the GitHub Copilot app, or delegating tasks to an agent on GitHub.com. You can also use MCP to create new tools and services that work with Copilot, allowing you to customize and enhance your experience.

For example, you can connect an issue tracker so Copilot can look up a bug while working on a fix, without asking you to copy the issue into chat.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For a curated list of MCP servers from partners and the community, see the [GitHub MCP Registry](https://github.com/mcp).

Enterprises and organizations can choose to enable or disable use of MCP for members of their organization or enterprise with the **MCP servers in Copilot** policy. The policy is disabled by default. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies). The MCP policy **only** applies to users who have a Copilot Business or Copilot Enterprise subscription from an organization or enterprise that configures the policy. Copilot Free, Copilot Pro, Copilot Pro+, or Copilot Max **do not** have their MCP access governed by this policy.


MCP complements the context you provide through prompts, files, and instructions. It adds connections to tools and data, rather than replacing guidance about how the agent should work. For guidance about prompting and managing context, see [Prompting And Context](https://docs.github.com/en/copilot/concepts/prompting-and-context).

## Where you can use MCP

MCP setup depends on where you use Copilot:

* **The GitHub Copilot app**: You can use MCP servers configured for your repository or in your local Copilot configuration. You can also discover and install additional MCP servers from the **Customize** tab.
* **Copilot CLI**: GitHub Copilot CLI supports both local and remote MCP servers. The GitHub MCP server is built in and available without additional configuration.
* **Copilot cloud agent and Copilot code review**: GitHub.com supports MCP servers configured at the repository level. The configuration applies to both Copilot cloud agent and Copilot code review. The GitHub MCP server and Playwright MCP server are configured by default.
* **IDEs**: MCP servers are supported in Visual Studio Code, Visual Studio, JetBrains IDEs, Xcode, and Eclipse. Connection and authentication options depend on the IDE. See [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).

Chat on GitHub.com has preconfigured tools, such as tools for creating branches and searching code. This is separate from the repository MCP settings for Copilot cloud agent and Copilot code review. See [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github).

## MCP for Copilot cloud agent

The following sections describe MCP defaults and configuration for Copilot cloud agent. Repository-level MCP settings also apply to Copilot code review, as noted below. For other surfaces, use the setup guides in [Next steps](#next-steps).

### Default MCP servers

Copilot cloud agent starts with two MCP servers configured:

* **GitHub** provides access to repository data such as issues and pull requests. By default, it uses a specially scoped token with read-only access to the current repository. Access outside that repository requires explicitly configuring credentials with broader access.
* **Playwright** provides tools to read, interact with, and take screenshots of web pages. By default, it can only access web resources in the agent's own environment through `localhost` or `127.0.0.1`.

These defaults are specific to the cloud environment. For example, Copilot CLI includes the GitHub MCP server without additional configuration, but you configure other servers separately.

### Repository-level configuration

Repository administrators can configure MCP servers in repository settings on GitHub.com. These settings are shared by Copilot cloud agent and Copilot code review. You can disable MCP tool use for code review separately.

This repository setting is distinct from project MCP configuration files used by Copilot CLI. Use the setup guide for your surface rather than assuming that the same configuration location applies everywhere.

> [!WARNING]
> Copilot cloud agent uses configured MCP tools autonomously and does not ask for approval before calling them. Review each server and allow only the tools and access needed for your tasks.

When configuring MCP servers for use by Copilot cloud agent and Copilot code review, keep in mind:

* Copilot cloud agent and Copilot code review only support MCP tools. They do not currently support resources or prompts provided by the MCP server.
* Copilot cloud agent and Copilot code review do not currently support remote MCP servers that leverage OAuth for authentication and authorization.


Copilot code review additionally requires tools to declare `annotations.readOnlyHint: true`. Tools with this annotation missing or set to `false` are excluded.

For configuration, authentication, and validation procedures, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### MCP servers for custom agents

For Copilot cloud agent, an agent profile can define MCP servers for that custom agent, rather than making them available to every agent working in the repository. The `mcp-servers` profile property is not used by custom agents running directly in IDEs.

For Copilot cloud agent, default server configurations are processed first, then custom agent configurations, then repository settings. Later configurations can override earlier settings. This order does not describe project-file precedence in Copilot CLI.

For the profile format, supported properties, and processing rules, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration).

## Best practices

* Review third-party servers before enabling them. Check their tools, authentication requirements, and data access against your organization's requirements.
* Enable only the tools a task needs. In repository settings, use the `tools` field to allowlist specific tools, preferably read-only tools, rather than enabling every tool.
* Keep credentials scoped to the required resources. Do not broaden the default token's access for Copilot cloud agent unless the task needs it.
* Validate configuration before relying on it. Confirm which servers and tools are available in your agent session. For setup instructions for your environment, see [Next steps](#next-steps).

## About the GitHub MCP server

The GitHub MCP server is a Model Context Protocol (MCP) server provided and maintained by GitHub.

GitHub MCP server can be used to:

* Automate and streamline code-related tasks.
* Connect third-party tools (like Cursor, Windsurf, or future integrations) to leverage GitHub’s context and AI capabilities.
* Enable cloud-based workflows that work from any device, without local setup.
* Invoke GitHub tools, such as Copilot cloud agent (requires GitHub Copilot subscription) and code scanning (requires GitHub Advanced Security subscription), to assist with code generation and security analysis.

To learn how to use the GitHub MCP server, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/copilot-for-common-tasks/use-the-github-mcp-server).

To find out whether your editor supports the GitHub MCP server, and which connection and authentication methods are available, see [Support by host application](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/README.md#support-by-host-application) in the `github/github-mcp-server` repository.

### Remote access

You can access the GitHub MCP server remotely through Copilot Chat in Visual Studio Code without any local setup. The remote server has access to additional toolsets only available in the remote GitHub MCP server. For a list of such tools, see [Additional toolsets](https://github.com/github/github-mcp-server?tab=readme-ov-file#additional-toolsets-in-remote-github-mcp-server) in the `github/github-mcp-server` repository.

The GitHub MCP server can also run locally in any MCP-compatible editor, if necessary.

### Toolset customization

> [!IMPORTANT]
> Always review the GitHub MCP server repository at [github/github-mcp-server](https://github.com/github/github-mcp-server) for the latest toolsets and authoritative configuration guidance.

The GitHub MCP server supports enabling or disabling specific groups of functionalities via toolsets. Toolsets allow you to control which GitHub API capabilities are available to your AI tools.

Enabling only the toolsets you need improves your AI assistant's performance and security. Fewer tools means better tool selection accuracy and fewer errors. Disabling unused toolsets also frees up tokens in the AI's context window.

Toolsets do not only include tools, but also relevant MCP resources and prompts where applicable.

To learn how to configure toolsets for the GitHub MCP server, see [Configure Toolsets](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/configure-toolsets).

### Security

For all public repositories, and private repositories covered by GitHub Advanced Security, interactions with the GitHub MCP server are secured by push protection, which blocks secrets in AI-generated responses and prevents them from being included in actions taken on your behalf. You can also proactively scan your code for exposed secrets from within your AI coding agent. For more information, see [Scan For Secrets With GitHub MCP Server](https://docs.github.com/en/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server).

## About the GitHub MCP Registry

The GitHub MCP Registry is a curated list of MCP servers from partners and the community. You can use the registry to discover new MCP servers and find ones that meet your specific needs.

> [!NOTE]
> The GitHub MCP Registry is currently in public preview and subject to change.

## Agent finder

Agent finder is a discovery service that helps GitHub Copilot find the right capabilities—such as MCP servers, tools, agents, and skills—for a task at runtime, instead of requiring every capability to be configured in advance. Like an MCP registry, it searches a catalog of capabilities and returns ranked matches that GitHub Copilot can use on demand. Agent finder implements the open Agentic Resource Discovery (ARD) specification.

For Copilot CLI setup, see [Using agent finder](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers#using-agent-finder). The GitHub Copilot app provides an `af` built-in skill. See [Built In Skills](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills). To browse the catalog, see [GitHub Agent Finder](https://github.com/agentfinder).

## Next steps

* [Add MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)—Add MCP servers to Copilot CLI
* [Customize GitHub Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)—Manage MCP servers in the GitHub Copilot app
* [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers)—Configure repository MCP servers for Copilot cloud agent and Copilot code review
* [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp)—Add MCP servers to Copilot Chat in your IDE
* [Set Up The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server)—Set up the GitHub MCP server
