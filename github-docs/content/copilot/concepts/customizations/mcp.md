# Model Context Protocol (MCP)

## Overview of Model Context Protocol (MCP)

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.


You can use MCP to extend the capabilities of GitHub Copilot by integrating it with a wide range of existing tools and services. MCP works across all major Copilot surfaces—whether you're working in an IDE, using GitHub Copilot CLI, working in the GitHub Copilot app, or delegating tasks to an agent on GitHub.com. You can also use MCP to create new tools and services that work with Copilot, allowing you to customize and enhance your experience.

For example, you can connect an issue tracker so Copilot can look up a bug while working on a fix, without asking you to copy the issue into chat.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For a curated list of MCP servers from partners and the community, see the [GitHub MCP Registry](https://github.com/mcp).

Enterprises and organizations can choose to enable or disable use of MCP for members of their organization or enterprise with the **MCP servers in Copilot** policy. The policy is disabled by default. See [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) and [Manage Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies). The MCP policy **only** applies to users who have a Copilot Business or Copilot Enterprise subscription from an organization or enterprise that configures the policy. Copilot Free, Copilot Pro, Copilot Pro+, or Copilot Max **do not** have their MCP access governed by this policy.


MCP complements the context you provide through prompts, files, and instructions. It adds connections to tools and data, rather than replacing guidance about how the agent should work. For guidance about prompting and managing context, see [Prompting And Context](https://docs.github.com/en/copilot/concepts/prompting-and-context).

Connect a service once through GitHub-verified MCP servers (connectors), then use the connection across supported Copilot surfaces without repeating setup or signing in separately in each one. These connections also work in Copilot sessions running in a cloud sandbox, but not in sessions running on GitHub Actions. See [Copilot Connectors](https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors).

## Where you can use MCP

MCP setup depends on where you use Copilot:

* **The GitHub Copilot app**: You can use MCP servers configured for your repository or in your local Copilot configuration. You can also discover and install additional MCP servers from the **Customize** tab.
* **Copilot CLI**: GitHub Copilot CLI supports both local and remote MCP servers. The GitHub MCP server is built in and available without additional configuration.
* **Copilot cloud agent (including automations) and Copilot code review**: GitHub.com supports MCP servers configured at the repository level. The configuration applies to Copilot cloud agent, automations and Copilot code review. The GitHub MCP server and Playwright MCP server are configured by default.
* **IDEs**: MCP servers are supported in Visual Studio Code, Visual Studio, JetBrains IDEs, Xcode, and Eclipse. Connection and authentication options depend on the IDE. See [Extend Copilot Chat With MCP](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp).

Chat on GitHub.com has preconfigured tools, such as tools for creating branches and searching code. This is separate from the repository MCP settings for Copilot cloud agent and Copilot code review. See [Copilot On GitHub](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github).

## MCP for Copilot cloud agent

The following sections describe MCP defaults and configuration for Copilot cloud agent, including automations. Repository-level MCP settings also apply to Copilot code review, as noted below. For other surfaces, use the setup guides in [Next steps](#next-steps).

### Default MCP servers

Copilot cloud agent starts with two MCP servers configured:

* **GitHub** provides access to repository data such as issues and pull requests. By default, it uses a specially scoped token with read-only access to the current repository. Access outside that repository requires explicitly configuring credentials with broader access.
* **Playwright** provides tools to read, interact with, and take screenshots of web pages. By default, it can only access web resources in the agent's own environment through `localhost` or `127.0.0.1`.

These defaults are specific to the cloud environment. For example, Copilot CLI includes the GitHub MCP server without additional configuration, but you configure other servers separately.

### Personal MCP servers

Personal MCP servers connect Copilot to tools and data for your own workflow. Configure a server once to make it available in every cloud session you start. These servers are available only to you and do not affect other users working in the same repository.

Before configuring a personal MCP server, check if the service you need is covered by GitHub-verified MCP servers (connectors). GitHub-verified MCP servers are available in both cloud and local sessions, and GitHub handles MCP server configuration and authentication for you. By contrast, personal MCP servers only support key-based authentication and are only available in cloud sandboxes. See [Copilot Connectors](https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors).

Use personal MCP servers for connections you want across repositories or that require your own credentials. To provide a shared configuration for collaborators working in a particular repository, use [repository-level configuration](#repository-level-configuration) instead.

1. Navigate to your Copilot {% octicon "home" aria-label="The home icon" %} home page at [github.com/copilot](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=customization-concept-doc-home&utm_medium=docs&utm_campaign=universe-2026).
1. In the left menu, click the **{% octicon "tools" aria-label="The tools icon" %} Customize** menu.
1. Check whether the service you need is covered by a GitHub-verified MCP server.
1. If a GitHub-verified MCP server doesn't cover your needs and you want to configure your own MCP server, select the **{% octicon "plus" aria-label="The plus icon" %} Add** dropdown menu, then click **{% octicon "server" aria-label="The server icon" %} MCP server**.
1. Enter the server name, transport type, URL or startup command, and other required configuration.
1. If authentication is required, create secrets in [Personal MCP server secrets](https://github.com/settings/copilot/agent-secrets?utm_source=customization-concept-doc-agent-secrets&utm_medium=docs&utm_campaign=universe-2026) with names prefixed with `COPILOT_MCP_`, such as `COPILOT_MCP_API_KEY`, and reference them in the server configuration.
1. Click **Add server**.

By default, personal MCP server secrets are available in sessions scoped to your personal account. You can also allow their use in selected organizations to use your authenticated servers there.

#### Limitations

* Personal MCP servers are available in every cloud session. You cannot currently choose which servers to enable for an individual session.
* Custom HTTP and SSE MCP servers do not support query parameters in their URLs. Pass these values as request headers instead.
* If a server is unavailable, check its configuration and confirm that any required secrets exist and are available to the account or organization where the session runs.
* You can use up to 50 MCP servers in total across personal and repository-level configurations.

### Repository-level configuration

Repository-level MCP servers connect Copilot to tools and data for work in a specific repository. Repository administrators configure these servers in repository settings on GitHub.com, and the configuration is available to anyone with write access to the repository. These settings apply to both Copilot in the cloud (including automations) and Copilot code review. You can disable MCP tool use for code review separately.

Use repository-level configuration when collaborators need the same tools, such as a shared issue tracker or documentation service. For servers that require authentication, use a service account for Copilot rather than personal credentials. Repository-level servers cannot reference personal MCP server secrets.

You can use personal and repository-level servers together. If both configurations define a server with the same name, the repository-level configuration takes precedence.

This repository setting is distinct from project MCP configuration files used by Copilot CLI. Use the setup guide for your surface rather than assuming that the same configuration location applies everywhere.

Automations can use tools from these MCP servers, but only the tools you select for each automation. See [About Automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#tools-and-actions).

> [!WARNING]
> When you delegate work to Copilot by @mentioning it or assigning it an issue or pull request, Copilot uses configured MCP tools autonomously and does not ask for approval before calling them. For these workflows, review each server and allow only the tools and access needed for your tasks.

When configuring MCP servers for use by Copilot cloud agent and Copilot code review, keep in mind:

* Copilot cloud agent and Copilot code review only support MCP tools. They do not currently support resources or prompts provided by the MCP server.
* For MCP servers configured in repository settings or custom agent profiles, Copilot cloud agent and Copilot code review do not currently support remote servers that use OAuth for authentication and authorization.


Copilot code review additionally requires tools to declare `annotations.readOnlyHint: true`. Tools with this annotation missing or set to `false` are excluded.

For configuration, authentication, and validation procedures, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### MCP servers for custom agents

For Copilot cloud agent, an agent profile can define MCP servers for that custom agent, rather than making them available to every agent working in the repository. The `mcp-servers` profile property is not used by custom agents running directly in IDEs.

For Copilot cloud agent, default server configurations are processed first, then custom agent configurations, then repository settings. Later configurations can override earlier settings. This order does not describe project-file precedence in Copilot CLI.

For the profile format, supported properties, and processing rules, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration).

## Best practices

* Review third-party servers before enabling them. Check their tools, authentication requirements, and data access against your organization's requirements.
* Enable only the tools a task needs. In repository settings, use the `tools` field to allowlist specific tools, preferably read-only tools, rather than enabling every tool. In automations, pick the specific tools you need.
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
