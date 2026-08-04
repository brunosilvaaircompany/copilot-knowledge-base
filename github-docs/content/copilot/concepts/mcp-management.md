# MCP server usage in your company

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.


You can manage MCP server usage in your organization or enterprise by configuring a series of MCP policies on GitHub. Through these policies, you can allow or block MCP server usage entirely, or restrict access to a list of servers that you define in an MCP registry.

## MCP policy settings

The following settings let you control how MCP servers are discovered and accessed in your organization or enterprise:

* **MCP servers in Copilot**: Manage the use of MCP servers for all users with Copilot seats in your organization or enterprise.
* **MCP Registry URL**: Specify the URL of your MCP registry, allowing your developers to discover and use approved MCP servers in supported surfaces.
* **Restrict MCP access to registry servers**: Choose whether to allow all MCP servers or restrict access to only those listed in your configured registry.

For an overview of which policies apply to which surfaces, see [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies).

## MCP registries

An MCP registry is a directory of MCP servers that acts like a catalog for IDEs and Copilot. Each registry entry points to a server's manifest, which describes the tools, resources, and prompts that server provides.

After you create your MCP registry, you can make it available to your company, allowing you to:
* Curate a catalog of MCP servers your developers can discover and use without context switching
* Restrict access to unapproved servers for increased security and compliance
* Provide clarity to developers when a server is blocked by policy

To create your own MCP registry, see [Configure MCP Registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry).

### Supported surfaces

The following table lists where MCP registry features are supported in detail.

| Surface | Registry display | Allowlist enforcement |
|---|:---:|:---:|
| Copilot CLI | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.0.11+ |
| Copilot cloud agent | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Eclipse | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v4.38+ |
| JetBrains | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.5.64+ |
| Visual Studio | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v18.4.0+ |
| VS Code | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v1.109.3+ |
| Xcode | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} v0.47.0+ |

> [!NOTE]
> For Eclipse, JetBrains, and Xcode, MCP management features are supported in the pre-release versions of Copilot.
