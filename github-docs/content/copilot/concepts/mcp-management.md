# MCP server usage in your company

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.


You can manage MCP server usage in your organization or enterprise by configuring MCP policies on GitHub.

The **MCP servers in Copilot** policy defines whether MCP servers can run at all across Copilot clients. We recommend keeping this policy enabled and, if necessary, restricting the MCP servers that users can run to an approved list.

## MCP allowlists

The recommended method for creating an allowlist is to use your enterprise's `managed-settings.json` file. This allows you to apply settings across clients that users cannot override.

Alternatively, you can host your own MCP registry and restrict access to servers in the registry. However, this method has weaker enforcement than `managed-settings.json`.

{% rowheaders %}

| Method | Managed settings file | Custom registry |
| ------ | --------------------- | --------------- |
| Release phase | Generally available | Public preview, not prioritized for development |
| Ease of setup | You can host a configuration file on GitHub that applies automatically to clients. | You must host your own registry that matches the MCP specification and serves HTTPS requests. |
| Enforcement level | Enterprise-wide settings, overridable for enterprise teams | Enterprise-wide or for individual organizations |
| Supported clients | Clients supported by the `managed-settings.json` file, see [Configure Enterprise Managed Settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings). Planned to expand in the near future. | See [MCP Private Registry Enforcement](https://docs.github.com/en/copilot/reference/enterprise-administrators/mcp-private-registry-enforcement). |
| Server matching method | Secure matching based on name, URL, or `stdio` commands | Less secure matching, based on name or ID only. Users can bypass the restriction by editing configuration files. |

{% endrowheaders %}

## Next steps

To configure an allowlist on GitHub, see [Configure Enterprise Allowlist](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

If you  create your own MCP registry, see

## Further reading

* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
* [Configure MCP Registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry)
