# MCP server usage in your company

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to connect AI models to different data sources and tools, enabling them to work together more effectively.


You can manage MCP server usage in your organization or enterprise by configuring MCP policies on GitHub.

The **MCP servers in Copilot** policy defines whether MCP servers can run at all across Copilot clients. We recommend keeping this policy enabled and, if necessary, restricting the MCP servers that users can run to an approved list.

This policy also applies to Copilot connectors. Because connectors are in public preview, the **Editor preview features** policy must also be enabled. To enable it, see [Manage Policies](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies#enabling-copilot-features-and-models-in-your-organization) or [Manage Enterprise Policies](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise). On clients that enforce your MCP restrictions, connectors are blocked if **Restrict MCP access to registry servers** is set to **Registry only**, or if your allowlist doesn't include connector URLs. See [Copilot Connectors](https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors#enabling-connectors-in-your-organization).

## MCP allowlists

The recommended method for creating an allowlist is to use your enterprise's `managed-settings.json` file. This allows you to apply settings across clients that users cannot override.

Alternatively, you can host your own MCP registry and restrict access to servers in the registry. However, this method has weaker enforcement than `managed-settings.json`.

{% rowheaders %}

| Method | Managed settings file | Custom registry |
| ------ | --------------------- | --------------- |
| Release phase | Generally available | Public preview, not prioritized for development |
| Ease of setup | You can host a configuration file on GitHub that applies automatically to clients. | You must host your own registry that matches the MCP specification and serves HTTPS requests. |
| Enforcement level | Enterprise-wide settings, overridable for enterprise teams | Enterprise-wide or for individual organizations |
| Supported clients | Clients supported by the `managed-settings.json` file, see [Get Started](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started). Planned to expand in the near future. | See [MCP Private Registry Enforcement](https://docs.github.com/en/copilot/reference/enterprise-administrators/mcp-private-registry-enforcement). |
| Server matching method | Secure matching based on name, URL, or `stdio` commands | Less secure matching, based on name or ID only. Users can bypass the restriction by editing configuration files. |

{% endrowheaders %}

## Distribute MCP servers through a plugin marketplace

If your enterprise already uses a plugin marketplace, you can distribute approved MCP server configurations alongside skills in the same plugins. This lets you maintain one catalog of customizations instead of hosting a separate MCP registry for discovery.

On supported clients, combine the following settings:

* `strictKnownMarketplaces` restricts eligible marketplace sources.
* `strictPluginOnlyCustomization` with `mcp` blocks standalone user and project MCP configurations while allowing eligible plugin and managed sources.

These source restrictions do not replace MCP server allowlists and denylists. Keep those rules if you also need to restrict server URLs or commands.

Before retiring a registry policy, verify that the replacement controls cover every affected client and session type. For setup and migration steps, see [Manage Plugin Marketplaces And Plugins](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins#move-mcp-distribution-from-a-registry-to-a-marketplace).

## Next steps

To configure an allowlist on GitHub, see [Configure Enterprise Allowlist](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-enterprise-allowlist).

## Further reading

* [Supported Surfaces For Policies](https://docs.github.com/en/copilot/reference/supported-surfaces-for-policies)
* [Configure MCP Registry](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry)
