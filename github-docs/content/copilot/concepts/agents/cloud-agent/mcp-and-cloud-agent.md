# Model Context Protocol (MCP) and GitHub Copilot cloud agent

## Overview

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.

You can use MCP to extend the capabilities of Copilot cloud agent by connecting it to other tools and services.


The agent can use tools provided by local and remote MCP servers. Some MCP servers are configured by default to provide the best experience for getting started.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on some of the currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

When configuring MCP servers for use by Copilot cloud agent and Copilot code review, keep in mind:

* Copilot cloud agent and Copilot code review only support MCP tools. They do not currently support resources or prompts provided by the MCP server.
* Copilot cloud agent and Copilot code review do not currently support remote MCP servers that leverage OAuth for authentication and authorization.


## Default MCP servers

The following MCP servers are configured automatically for Copilot cloud agent:

* **GitHub**: The GitHub MCP server gives Copilot access to GitHub data like issues and pull requests. To learn more, see [Use The GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server).
  * By default, the GitHub MCP server connects to GitHub using a specially scoped token that only has read-only access to the current repository. You can customize it to use a different token with broader access. For more details, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers#customizing-the-built-in-github-mcp-server).

* **Playwright**: The [Playwright MCP server](https://github.com/microsoft/playwright-mcp) gives Copilot access to web pages, including the ability to read, interact and take screenshots.
  * By default, the Playwright MCP server is only able to access web resources hosted within Copilot's own environment, accessible on `localhost` or `127.0.0.1`.

## Setting up MCP servers in a repository

Repository administrators can configure MCP servers for use within that repository. This is done via a JSON-formatted configuration in repository settings on GitHub.

> [!NOTE]
> Repository MCP configuration on GitHub applies to both Copilot cloud agent and Copilot code review. MCP servers configured in repository MCP settings are available to both agents.

Once MCP servers are configured for use within a repository, the tools specified in the configuration will be available to Copilot cloud agent during each assigned task.

Copilot will use available tools autonomously, and will not ask for approval before use.

For details of how to set up MCP servers in a repository, see [Configure MCP Servers](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

## MCP servers for custom agents

You can also configure MCP servers for custom agents.

MCP servers configured in custom agents are available only to that specific agent and follow the same processing order as other MCP configurations, with custom agent MCP settings processed after default servers but before repository-level configurations.

For more information on configuring MCP servers for custom agents, see [Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).

## Best practices

* Enabling third-party MCP servers for use may impact the performance of the agent and the quality of the outputs. Review the third-party MCP server thoroughly and ensure that it meets your organization’s requirements.

* By default, Copilot cloud agent does not have access to write MCP server tools. However, some MCP servers do contain such tools. Be sure to review the tools available in the MCP server you want to use. Update the `tools` field in the MCP configuration with only the necessary tooling.

* Carefully review the configured MCP servers prior to saving the configuration to ensure the correct servers are configured for use.
