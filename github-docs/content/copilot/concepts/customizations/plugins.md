Plugins package related customizations so you can install and manage them together instead of setting up each one separately. For example, a testing plugin could combine a skill for running tests, an agent for code review, and an MCP server for a test-reporting service.

## Where you can use plugins

Plugins are available on these Copilot surfaces:

* Visual Studio Code. Browse and install plugins from **Customize** in the Chat side panel or Agents window. For VS Code plugin format details, see the [Agent Plugins authoring reference](https://code.visualstudio.com/docs/agents/reference/agent-plugin-reference).
* GitHub Copilot CLI. Browse and install plugins from a registered marketplace.
* The GitHub Copilot app. Browse and install plugins from **Customize**.
* Copilot in the cloud. Configure plugins through repository settings.

A plugin can contain components that only work in a particular surface. Check that the plugin supports the surface you use. For example, the LSP server configuration described in this category is for Copilot CLI. For more information, see [Plugin And Marketplace Reference](https://docs.github.com/en/copilot/reference/plugin-and-marketplace-reference).

## What plugins contain

A plugin can package some or all of these components. Available components and their locations depend on the plugin format and surface:

* **Custom agents** — Specialized AI assistants (`*.agent.md` files in `agents/`)
* **Skills** — Task-specific instructions, scripts, and resources (skill subdirectories in `skills/`, containing a `SKILL.md` file)
* **Hooks** — Event handlers that respond to agent actions (a `hooks.json` file in the plugin root, or in `hooks/`)
* **Extensions** — Surface-specific code that adds capabilities such as tools and slash commands
* **MCP server configurations** — Model Context Protocol integrations (root `mcp.json` in Agent Plugins 1.0)
* **LSP server configurations** — Language Server Protocol integrations on supported surfaces

## Plugin formats

Agent Plugins is a format for sharing plugin manifests, skills, and MCP server configurations across compatible surfaces. Agent Plugins 1.0 plugins declare the canonical schema in `plugin.json`; its schema and component locations are not supported by every surface in the same way. Copilot CLI also supports a legacy Copilot plugin format. In the CLI, a manifest without the Agent Plugins schema uses this legacy format.

Choose Agent Plugins when you want to share skills and MCP servers across compatible surfaces. Use the legacy CLI format when you need configurable component paths or are maintaining an existing Copilot-specific plugin.

For a new plugin, use Agent Plugins 1.0 unless you require configurable component paths. Use the legacy format primarily for existing legacy plugins.

## How plugins are structured

A plugin is a directory with a specific structure and a `plugin.json` manifest file. Agent Plugins 1.0 requires the manifest at the plugin root. Legacy plugins support additional manifest locations. The manifest gives the plugin a name and metadata. Depending on the format, it can also point to components. Alongside the manifest, the directory can contain agents, skills, hooks, MCP server configurations, and LSP server configurations.

### Agent Plugins 1.0 structure

Agent Plugins 1.0 stores skills and MCP servers in standard locations so compatible clients can discover them. Other components, including agents, hooks, commands, and LSP servers, are client-specific. Copilot reads these components from the `com.github.copilot` directory. Other clients ignore this directory, so the same plugin can combine shared skills and MCP servers with Copilot-specific components.

An Agent Plugins 1.0 directory can look like this:

```text
my-plugin/
├── plugin.json               # Required manifest
├── skills/                   # Skills (optional)
│   └── deploy/
│       └── SKILL.md
├── mcp.json                  # MCP server config (optional)
└── com.github.copilot/       # Copilot components (optional)
    ├── agents/
    │   └── helper.agent.md
    ├── commands/
    ├── rules/
    ├── hooks/
    │   └── hooks.json
    └── lsp.json
```

The manifest must include the Agent Plugins 1.0 `$schema`. For supported top-level manifest fields, name requirements, and component locations, see [Agent Plugins 1.0 manifest fields](/copilot/reference/copilot-cli-reference/cli-plugin-reference#agent-plugins-10-manifest-fields).

### Legacy plugin structure

A legacy Copilot plugin directory can look like this:

```text
my-plugin/
├── plugin.json           # Required manifest
├── agents/               # Custom agents (optional)
│   └── helper.agent.md
├── skills/               # Skills (optional)
│   └── deploy/
│       └── SKILL.md
├── hooks.json            # Hook configuration (optional)
├── .mcp.json             # MCP server config (optional)
└── lsp.json              # LSP server config (optional)
```

For the full set of fields you can include in the manifest, see [CLI Plugin Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference). For step-by-step guidance on authoring a plugin, see [Plugins Creating](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

## Why use plugins?

Plugins provide the following benefits:

* Reusability across projects
* Shared Copilot configuration across repositories
* Share domain expertise (for example, by providing the skills of a Rails expert, or a Kubernetes expert)
* Encapsulate complex MCP server setups

## Where plugins come from

The built-in marketplace in Visual Studio Code, Copilot CLI, and the GitHub Copilot app is [awesome-copilot](https://github.com/github/awesome-copilot?utm_source=customization-plugin-doc-awesome&utm_medium=docs&utm_campaign=universe-2026). Other marketplaces must be added before their plugins are available.

Adding a marketplace makes its plugins available to browse. It does not install or enable them. A plugin's identifier combines the plugin name with the marketplace name as `PLUGIN-NAME@MARKETPLACE-NAME`. The marketplace name comes from the `name` field in its `marketplace.json` file, not from the repository name.

## What decides whether a plugin is enabled

Plugins can be available, installed, or enabled. Adding a marketplace makes its plugins available to browse. Installing a plugin adds it to a surface, and enabling it makes its components available in sessions on that surface. Shared configuration can set a default or enforce whether a plugin is enabled:

| Configuration source | Effect | Can a member turn the plugin off? |
| --- | --- | --- |
| Enterprise managed settings | Require or block a plugin across supported surfaces. | No. Managed policy always wins. |
| Enterprise team managed settings | Add required plugins through `enabledPlugins` in enterprise team files, layered on the enterprise baseline. | No. These entries are managed policy. |
| Repository defaults | Enable a plugin for everyone who works in a repository. | Yes, where the surface supports a local override. |

Repository defaults do not make a plugin mandatory. They cannot enable a plugin that managed policy blocks or use a marketplace that policy disallows. Managed settings cannot enable an optional plugin by default. They only require or block plugins.

Enterprise team files add managed `enabledPlugins` entries to the enterprise baseline. Members cannot turn off required plugins. See [Override Settings For Teams](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/override-settings-for-teams).

Repository defaults use `.github/copilot/settings.json`. For configuration and surface-specific local overrides, see [CLI Config Dir Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).

Enterprise administrators can specify additional marketplaces and plugins that are required or blocked. See [Manage Plugin Marketplaces And Plugins](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins).

## How plugin marketplaces work

A plugin marketplace is a registry of plugins that you can browse and install from. A marketplace can be hosted in a repository on GitHub.com, another Git host, or a local directory. Because plugins in a marketplace are versioned, marketplaces make it easier to discover, install, and update plugins.

A marketplace is defined by a `marketplace.json` file, which provides metadata about the marketplace and lists its plugins.

For surface-specific instructions to use plugins or publish a marketplace in a GitHub repository, see [Further reading](#further-reading).

## Plugins compared with manual configuration

Any functionality that you could add with a plugin, you could also add by configuring Copilot manually—for example, by adding custom agent profiles or MCP servers. However, plugins provide several advantages over manual configuration:

| Feature    | Manual configuration in a repository | Plugin |
|------------|-----------------------------|-----------------|
| Scope      | Single repository           | Any project |
| Sharing    | Manual copy/paste           | Install command or `enabledPlugins` entry |
| Versioning | Git history                 | Marketplace versions |
| Discovery  | Searching repositories      | Marketplace browsing |

## Further reading

* [Using Plugins](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/using-plugins)
* [Plugins Finding Installing](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [Customize GitHub Copilot App](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app#adding-plugins)
* [Configuring Agent Settings](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#configuring-plugins-for-github-copilot-cloud-agent)
* [Create And Share Plugin Marketplaces](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces)
