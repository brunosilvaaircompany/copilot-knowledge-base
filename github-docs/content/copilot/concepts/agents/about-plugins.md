Plugins provide a way to distribute custom Copilot functionality. You can use a plugin to add a preconfigured set of capabilities to Copilot, including Copilot CLI and Copilot cloud agent.

## What is a plugin?

* A distributable package that extends Copilot's functionality.
* A bundle of components in a single installable unit.

## What plugins contain

A plugin can contain some or all of the following components:

* **Custom agents** — Specialized AI assistants (`*.agent.md` files in `agents/`)
* **Skills** — Discrete callable capabilities (skills subdirectories in `skills/`, containing a `SKILL.md` file)
* **Hooks** — Event handlers that intercept agent behavior (a `hooks.json` file in the plugin root, or in `hooks/`)
* **MCP server configurations** — Model Context Protocol integrations (a `.mcp.json` file in the plugin root, or an `mcp.json` file in `.github/`)
* **LSP server configurations** — Language Server Protocol integrations (an `lsp.json` file in the plugin root, or in `.github/`)

## How plugins are structured

A plugin is a directory with a specific structure. At minimum, it contains a `plugin.json` manifest file at the root of the directory. The manifest gives the plugin a name and points to the components the plugin provides. Alongside the manifest, the directory can contain any combination of agents, skills, hooks, MCP server configurations, and LSP server configurations.

A typical plugin directory looks like this:

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
* Team standardization of Copilot configuration
* Share domain expertise (for example, by providing the skills of a Rails expert, or a Kubernetes expert)
* Encapsulate complex MCP server setups

## Where can I get plugins?

You can install plugins from:

* A marketplace
* A repository
* A local path

A marketplace is a location where developers can publish, discover, install, and manage plugins. It's a bit like an app store—but for plugins.

Examples of marketplaces include:

* [copilot-plugins](https://github.com/github/copilot-plugins) (added by default)
* [awesome-copilot](https://github.com/github/awesome-copilot) (added by default)
* [claude-code-plugins](https://github.com/anthropics/claude-code)
* [claudeforge-marketplace](https://github.com/claudeforge/marketplace)

How you install a plugin depends on which client you're using:

* In Copilot CLI, you can install plugins imperatively using the `copilot plugin install` command or the `/plugin install` slash command, or declaratively by adding the plugin to the `enabledPlugins` field of either a user-level `~/.copilot/settings.json` file or a repository-level `.github/copilot/settings.json` file. See [Plugins Finding Installing](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing).
* In Copilot cloud agent, you install plugins declaratively by adding them to the `enabledPlugins` field of the repository's `.github/copilot/settings.json` file. To install plugins from a marketplace that isn't registered by default, you can also add the marketplace to the `extraKnownMarketplaces` field in the same file.

Enterprise administrators can define plugin standards that apply to users on the enterprise's Copilot plan, including specifying additional marketplaces and plugins that are automatically installed. See [About Enterprise Plugin Standards](https://docs.github.com/en/copilot/concepts/agents/about-enterprise-plugin-standards).

## How plugin marketplaces work

A plugin marketplace is a registry of plugins that you can browse and install from. A marketplace can be hosted in a repository on GitHub.com, in any other online Git hosting service, or on your local or shared file system.

A marketplace is defined by a `marketplace.json` file, which provides metadata about the marketplace and lists the plugins it makes available. Each entry in the marketplace's `plugins` array describes a plugin—including its name, description, version, and the path to the plugin's directory.

Because plugins in a marketplace are versioned, marketplaces make it easy to discover, install, and update plugins, and to share them across a team. For step-by-step guidance on creating a marketplace, see [Plugins Marketplace](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace).

## Plugins compared with manual configuration

Any functionality that you could add with a plugin, you could also add by configuring Copilot manually—for example, by adding custom agent profiles or MCP servers. However, plugins provide several advantages over manual configuration:

| Feature    | Manual configuration in a repository | Plugin |
|------------|-----------------------------|-----------------|
| Scope      | Single repository           | Any project |
| Sharing    | Manual copy/paste           | Install command or `enabledPlugins` entry |
| Versioning | Git history                 | Marketplace versions |
| Discovery  | Searching repositories      | Marketplace browsing |

## Further reading

* [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
* [Hooks](https://docs.github.com/en/copilot/concepts/agents/hooks)
* [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents)
